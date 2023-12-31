import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import fs from 'fs'
import mkdirp from 'mkdirp'
const UPLOAD = './public';
export function loadModules(server) {
    console.info('SETUP - Cargando módulos...');

    server.use(cors());
	if (!fs.existsSync(UPLOAD)){
		mkdirp.sync(UPLOAD);
	}
    server.use(express.static('public'));

    const isProduction = process.env.ENV === 'production';
    server.use(helmet({ contentSecurityPolicy: isProduction ? undefined : false }));

    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(cookieParser());
    server.use(morgan('tiny'));
}
