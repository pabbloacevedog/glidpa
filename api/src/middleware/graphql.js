// Importaciones relevantes
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/lib/use/ws';
import { PubSub } from 'graphql-subscriptions';
import schema from '../schema/index.js'
import context from '../utils/context.js';

const pubsub = new PubSub();

export async function setupGraphQL(server, httpServer) {
    console.info('SETUP - Configurando GraphQL...');
    const wsServer = setupWebSocketServer(server);
    const graphQLServer = await setupApolloServer(httpServer, wsServer);

    // server.use('/graphql', expressMiddleware(graphQLServer, {
    //     context: async ({ req }) => ({ pubsub, ...getDynamicContext(req) }),
    // }));
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
