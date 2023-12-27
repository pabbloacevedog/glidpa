// Imports
import express from 'express'
import { createServer } from 'http';
import dotenv from 'dotenv';
dotenv.config()
// App Imports
// import setupLoadModules from './middleware/loadModules.js'
import { loadModules } from './middleware/loadModules.js';
import { setupGraphQL } from './middleware/graphql.js';
// import setupGraphQL from './middleware/graphql.js'
// import setupStartServer from './middleware/startServer.js'
import { startServer } from './middleware/startServer.js';


// Create express server
const server = express()
const httpServer = createServer(server);
// Setup load modules
loadModules(server)
// Setup GraphQL
setupGraphQL(server, httpServer)
// Manejador de errores global
server.use((err, req, res, next) => {
    console.error('Error no capturado:', err);
    res.status(500).send('Ocurrió un error');
});
// Start server
startServer(httpServer)
