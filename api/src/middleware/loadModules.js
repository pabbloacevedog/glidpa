import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import fs from 'fs'
import mkdirp from 'mkdirp'
import { CLIENT } from '../config/config.js';
const UPLOAD = './public';
export function loadModules(server) {
	console.info('SETUP - Cargando módulos...');

	const corsOptions = {
		// set origin to a specific origin.
		origin: CLIENT,

		// or, set origin to true to reflect the request origin
		//origin: true,

		credentials: true,
		optionsSuccessStatus: 200,
	};

	server.use(cors(corsOptions));
	if (!fs.existsSync(UPLOAD)) {
		mkdirp.sync(UPLOAD);
	}
	server.use(express.static('public'));

	const isProduction = process.env.ENV === 'production';
	server.use(helmet({ contentSecurityPolicy: isProduction ? undefined : false }));

	server.use(bodyParser.json());
	server.use(bodyParser.urlencoded({ extended: false }));
	server.use(cookieParser());
	server.use((req, res, next) => {
		console.log('Cookies:', req.cookies);
		next();
	});
	server.use(morgan('tiny'));
}
