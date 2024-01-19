// src/services/authService.js
import nodemailer from 'nodemailer';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import models from '../models';
import { JWT_EXPIRES, JWT_SECRET } from '../config/config.js';
import { getCompanyIdByUserId, createCompany } from './companyService';
import crypto from 'crypto';
// Obtener un usuario por email
export async function obtenerUsuario(email) {
	return await models.User.findOne({ where: { email } });
}

// Generar token JWT
export async function generarToken(usuario, company_id) {
	const datosUsuario = usuario.get();
	const payload = {
		user_id: datosUsuario.id,
		email: datosUsuario.email,
		role_id: datosUsuario.role_id,
		company_id: company_id, // Incluir company_id en el payload del token
		// Otros datos si es necesario
	};

	return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES });
}

// Función para iniciar sesión
export async function login(email, password) {
	// Encuentra al usuario y su compañía asociada
	const usuarioCompare = await models.User.findOne({ where: { email } });


	if (!usuarioCompare) {
		throw new Error(`No tenemos ningún usuario registrado con el email ${email}. Por favor regístrese.`);
	}

	const passwordMatch = await bcrypt.compare(password, usuarioCompare.password);
	if (!passwordMatch) {
		throw new Error(`Lo sentimos, la contraseña que ingresaste es incorrecta. Inténtalo de nuevo.`);
	}
	const usuario = await models.User.findOne({
		where: { email },
		attributes: { exclude: ['password'] }, // Excluye la contraseña de los resultados
		include: [{
			model: models.Company,
			include: [{
				model: models.Plan // Asegúrate de que este modelo esté definido y relacionado correctamente
			}]
		}]
	});
	// const usuario = await models.User.findOne({
	// 	where: { email },
	// 	attributes: { exclude: ['password'] }, // Excluye la contraseña de los resultados
	// 	include: [{
	// 		model: models.Company,
	// 	}]
	// });
	// Obtener company_id
	const companyId = await getCompanyIdByUserId(usuario.user_id);
	const token = await generarToken(usuario, companyId);
	return { token, userData: usuario }
}

// Función para registrar un nuevo usuario
export async function signup(email, user, password, plan_id) {
	try {
		const usuario = await obtenerUsuario(email);

		if (usuario) {
			throw new Error(`Ya tenemos un usuario registrado con el email ${email}. Por favor Inicie sesión.`);
		}

		const codigoVerificacion = generarCodigoVerificacion();

		const newUser = await models.User.create({
			user,
			email,
			password, // Asegúrate de que la contraseña se hashea antes de guardarla
			role_id: 2,
			verification_code: codigoVerificacion // Almacena el código en la base de datos
		});

		const newCompany = await createCompany({ user_id: newUser.user_id, plan_id: plan_id });

		// Aquí podrías llamar a la función para enviar el correo de verificación si existe
		// enviarCorreoVerificacion(email, codigoVerificacion);

		return { message: "Usuario creado con éxito. Por favor valida tu email para continuar." };
	} catch (error) {
		// Aquí puedes manejar el error, por ejemplo, devolviendo un mensaje de error.
		console.error('Signup error:', error);
		throw new Error('Error al crear el usuario. Por favor intente de nuevo más tarde.');
	}
}
async function enviarCorreoVerificacion(emailUsuario, codigoVerificacion) {
	// const transporter = nodemailer.createTransport({
	// 	service: 'gmail',
	// 	auth: {
	// 		user: 'pablo@gmail.com',
	// 		pass: 'tuContraseña',
	// 	},
	// });
	let testAccount = await nodemailer.createTestAccount();
	// create reusable transporter object using the default SMTP transport
	let transporter = nodemailer.createTransport({
		host: "smtp.ethereal.email",
		port: 587,
		secure: false, // true for 465, false for other ports
		auth: {
			user: testAccount.user, // generated ethereal user
			pass: testAccount.pass, // generated ethereal password
		},
	});
	const mensaje = `Tu código de verificación es: ${codigoVerificacion}`;
	await transporter.sendMail({
		from: 'gildpa@gmail.com',
		to: emailUsuario,
		subject: 'Verificación de Cuenta',
		text: mensaje,
	});
}
async function verificarUsuario(codigoUsuario, emailUsuario) {
	const usuario = await models.User.findOne({ where: { email: emailUsuario, codigoVerificacion: codigoUsuario } });
	if (!usuario) {
		throw new Error('Código de verificación inválido.');
	}
	await activarCuenta(usuario.user_id);
}
async function activarCuenta(usuarioId) {
	await models.User.update({ activo: true }, { where: { user_id: usuarioId } });
	// Aquí, 'activo' es una columna en la tabla de usuarios que indica si la cuenta está activada
}

function generarCodigoVerificacion() {
	const min = 1000;  // Para un código de 4 dígitos
	const max = 9999;  // El máximo para 4 dígitos
	return Math.floor(Math.random() * (max - min + 1)) + min;
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

