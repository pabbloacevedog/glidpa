// Importaciones relevantes
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/lib/use/ws';
import { PubSub } from 'graphql-subscriptions';
import jwt from 'jsonwebtoken';
import express from 'express';
import cookieParser from 'cookie-parser';
import schema from '../schema/index.js'
import context from '../utils/context.js';
import authenticateJWT from '../utils/authenticateJWT.js';
import { login } from '../services/authService.js';
const pubsub = new PubSub();
import { JWT_SECRET } from '../config/config.js';
export async function setupGraphQL(server, httpServer) {
	console.info('SETUP - Configurando GraphQL...');
	const wsServer = setupWebSocketServer(server);
	const graphQLServer = await setupApolloServer(httpServer, wsServer);

	// Configuración del servidor Express
	server.use(cookieParser()); // Middleware para parsear cookies
	server.use(express.json()); // Middleware para parsear JSON, útil para el login

	// Endpoint para el login
	server.post('/login', async (req, res) => {
		try {
			const { email, password } = req.body;
			const { token, userData } = await login(email, password);

			// Configura la cookie con el token JWT
			res.cookie('authToken', token, {
				httpOnly: true,
				// Secure solo debe estar presente si estás usando HTTPS
				// secure: process.env.NODE_ENV === 'production',
				// sameSite: 'Lax',
				// domain: 'localhost', // o 'Lax' o 'None' con 'Secure' si se requiere para solicitudes cross-site
			});

			// Devuelve los datos del usuario y la compañía en la respuesta
			res.status(200).json({
				message: 'Login exitoso',
				userData
			});
		} catch (error) {
			res.status(401).send(error.message);
		}
	});
	server.get('/auth/status', authenticateJWT, (req, res, next) => {
		try {
			// console.log('request.cookies.get', req.cookies.authToken)
			const { authToken } = req.cookies;
			if (!authToken) {
				return res.json({ isLoggedIn: false });
			}

			// Verifica la validez del token
			jwt.verify(authToken, JWT_SECRET, (err, decoded) => {
				if (err) {
					console.log('error', err);
					return res.json({ isLoggedIn: false });
				}
				res.json({ isLoggedIn: true });
			});
		} catch (error) {
			console.log('error', error);
			res.status(500).send('Error al verificar el estado de la sesión');
		}
	});
	server.post('/logout', authenticateJWT, (req, res, next) => {
		res.clearCookie('authToken'); // Esto borra la cookie llamada 'authToken'
		res.json({ message: 'Logout exitoso' });
	});
	server.use('/graphql', expressMiddleware(graphQLServer, {
		context
	}));
}

function setupWebSocketServer(server) {
	const wsServer = new WebSocketServer({
		server: server,
		path: '/graphql',
	});
	useServer({ schema }, wsServer);
	return wsServer;
}

async function setupApolloServer(httpServer, wsServer) {
	const serverCleanup = useServer({ schema }, wsServer);
	const graphQLServer = new ApolloServer({
		schema,
		introspection: true, // Habilita la introspección
		plugins: [
			ApolloServerPluginDrainHttpServer({ httpServer }),
			{
				async serverWillStart() {
					return {
						async drainServer() {
							await serverCleanup.dispose();
						},
					};
				},
			},
		],
	});

	await graphQLServer.start();
	return graphQLServer;
}
