import models from '../models/index.js';
import config from '../config/config.json';

const { DB_FORCE_RESTART, ENV } = process.env;

export async function startServer(httpServer) {
    try {
        await syncDatabase();
        await iniciarServidor(httpServer);
    } catch (error) {
        console.error('ERROR - Iniciando servidor falló:', error);
        process.exit(1);
    }
}

async function syncDatabase() {
    console.info('SETUP - Sincronizando tablas de la base de datos...');
    const sequelizeOptions = { logging: config.logging, alter: true };
	console.info('ENV', DB_FORCE_RESTART, ENV );
    if (DB_FORCE_RESTART === 'true' && ENV !== 'production') {
		console.info('SETUP - Creando tablas');
        // sequelizeOptions.force = true;
    }

    await models.sequelize.sync(sequelizeOptions);
    console.info('INFO - Base de datos sincronizada correctamente.');
}

// async function iniciarServidor(server) {
//     console.info('SETUP - Iniciando servidor...');
//     server.listen({ port: config.port }, (error) => {
//         if (error) {
//             throw error;
//         }
//         console.info(`INFO - Servidor corriendo en el puerto ${config.port}.`);
//     });
// }
async function iniciarServidor(server) {
    console.info('SETUP - Iniciando servidor...');
    server.listen({ port: config.port }, (error) => {
        if (error) {
            console.error('ERROR - Error al iniciar el servidor:', error);
            process.exit(1);
        }
        console.info(`INFO - Servidor corriendo en el puerto ${config.port}.`);
    });
}
