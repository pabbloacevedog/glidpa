// App Imports
import models from '../../models/index.js';
import { hashPassword, desencriptarPassword } from '../../utils/index.js'
// Get usuario by ID
export async function buscar_por_usuario(parentValue, { usuario }) {
    try {
        return await models.Usuario.findOne({ where: { usuario } });
    } catch (error) {
        throw new Error(`Error al buscar usuario por ID: ${error.message}`);
    }
}

// Get usuario by Email
export async function buscar_por_email(parentValue, { email }) {
    try {
        return await models.Usuario.findOne({ where: { email } });
    } catch (error) {
        throw new Error(`Error al buscar usuario por email: ${error.message}`);
    }
}

// Buscar usuario
export async function buscar_usuario(parentValue, { usuario, word }) {
    try {
        const u = '%' + word + '%';
        return await models.sequelize.query(
            "SELECT us.rut_usuario, us.usuario, us.nombre, us.avatar, us.ruta_avatar " +
            "FROM usuario us WHERE us.nombre LIKE :u OR us.usuario LIKE :u",
            {
                replacements: { u },
                type: QueryTypes.SELECT
            }
        );
    } catch (error) {
        throw new Error(`Error al buscar usuario: ${error.message}`);
    }
}

// Obtener datos del usuario
export async function datos_usuario(parentValue, { usuario_id }) {
    try {
        const usuario = await models.sequelize.query(
            "SELECT us.nombre, us.rut_usuario, us.email, us.telefono, us.verificado, us.facebook, us.whatsapp, us.fecha_creacion, " +
            "us.avatar, us.ruta_avatar, lo.nombre as nombre_empresa, lo.empresa_id, lo.logo_empresa, lo.ruta_logo as ruta_logo_empresa, lo.descripcion_empresa " +
            "FROM usuario us LEFT JOIN shot_empresa lo ON us.empresa_id = lo.empresa_id WHERE us.usuario_id = :usuario_id",
            {
                replacements: { usuario_id },
                type: QueryTypes.SELECT
            }
        );
        return usuario[0] || null;
    } catch (error) {
        throw new Error(`Error al obtener datos del usuario: ${error.message}`);
    }
}

// Get all usuarios
export async function traer_todos() {
    try {
        return await models.Usuario.findAll();
    } catch (error) {
        throw new Error(`Error al obtener todos los usuarios: ${error.message}`);
    }
}

// Verificar si existe usuario
export async function existe_usuario(parentValue, { usuario }) {
    try {
        const usuarioExistente = await models.Usuario.findOne({ where: { usuario } });
        return { exists: !!usuarioExistente };
    } catch (error) {
        throw new Error(`Error al verificar si existe el usuario: ${error.message}`);
    }
}

// Delete usuario
export async function remover_usuario({ usuario_id }) {
    try {
        return await models.Usuario.destroy({ where: { usuario_id } });
    } catch (error) {
        throw new Error(`Error al eliminar usuario: ${error.message}`);
    }
}

// Create usuario
export async function crear_usuario(parentValue, { nombre, email, password }) {
    try {
        const usuarioExistente = await models.Usuario.findOne({ where: { email } });
        if (usuarioExistente) {
            throw new Error(`El email ${email} ya está registrado. Intenta iniciar sesión.`);
        }

        const passwordHashed = await hashPassword(await desencriptarPassword(password));
        await models.Usuario.create({ nombre, email, password: passwordHashed });
        return { creado: true };
    } catch (error) {
        throw new Error(`Error al crear el usuario: ${error.message}`);
    }
}

// Actualizar usuario
export async function actualizar_usuario(parentValue, { usuario_id, ...datosUsuario }) {
    try {
        await models.Usuario.update(datosUsuario, { where: { usuario_id } });
        return { editado: true };
    } catch (error) {
        throw new Error(`Error al actualizar usuario: ${error.message}`);
    }
}
