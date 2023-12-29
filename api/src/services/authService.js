// src/services/authService.js

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import models from '../models';
import config from '../config/config.json';
import { getCompanyIdByUserId, createCompany} from './companyService';
// Obtener un usuario por email
export async function obtenerUsuario(email) {
	return await models.User.findOne({ where: { email } });
}

// Generar token JWT
export async function generarToken(usuario,company_id) {
    const datosUsuario = usuario.get();
    const payload = {
        user_id: datosUsuario.id,
        email: datosUsuario.email,
        role_id: datosUsuario.role_id,
        company_id: company_id, // Incluir company_id en el payload del token
        // Otros datos si es necesario
    };

    return jwt.sign(payload, config.secret, { expiresIn: '1h' });
}

// Función para iniciar sesión
export async function login(email, password) {
	const usuario = await obtenerUsuario(email);

	if (!usuario) {
		throw new Error(`No tenemos ningún usuario registrado con el email ${email}. Por favor regístrese.`);
	}

	const passwordMatch = await bcrypt.compare(password, usuario.password);
	if (!passwordMatch) {
		throw new Error(`Lo sentimos, la contraseña que ingresaste es incorrecta. Inténtalo de nuevo.`);
	}
    // Obtener company_id
    const companyId = await getCompanyIdByUserId(usuario.user_id);
	const token = await generarToken(usuario, companyId);
	return {token}
}

// Función para registrar un nuevo usuario
export async function signup(email, user, password) {
	const newUser = await models.User.create({
		user,
		email,
		password, // La contraseña se hashea automáticamente gracias al hook beforeCreate
		role_id: 2
	});
	const newCompany = await createCompany({ user_id: newUser.user_id });
	const token = await generarToken(newUser, newCompany.company_id);
	return {token}
}

export async function loginGoogle(token) {
	try {
		const user = decode(token);
		let usuario = await models.Usuario.findOne({ where: { email: user.email } });

		if (!usuario) {
			// Crea un nuevo usuario si no existe
			usuario = await crearNuevoUsuario(user);
		}
		const newCompany = await createCompany({ user_id: newUser.user_id });
		// Procesar el inicio de sesión (común tanto para usuarios existentes como nuevos)
		return await generarToken(usuario, newCompany.company_id);
	} catch (error) {
		// Manejar los errores aquí
		throw new Error(`Error al procesar el inicio de sesión: ${error.message}`);
	}
}

async function crearNuevoUsuario(user) {
	const crear = {
		nombre: user.name,
		email: user.email,
		avatar: user.picture,
		role_id: 2,
	};
	return await models.User.create(crear);
}
// function checkRole(requiredRoles) {
//     return (parent, args, context, info) => {
//         if (!context.user || !requiredRoles.includes(context.user.role_id)) {
//             throw new Error('No autorizado');
//         }
//     };
// }

