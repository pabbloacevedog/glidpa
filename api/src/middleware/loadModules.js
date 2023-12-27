import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';

export function loadModules(server) {
    console.info('SETUP - Cargando módulos...');

    server.use(cors());
    server.use(express.static('public'));

    const isProduction = process.env.ENV === 'production';
    server.use(helmet({ contentSecurityPolicy: isProduction ? undefined : false }));

    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(cookieParser());
    server.use(morgan('tiny'));
}
