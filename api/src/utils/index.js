import bcrypt from 'bcrypt';
import CryptoJS from 'crypto-js';
import config from '../config/config.json';
import jwt from 'jsonwebtoken';
import models from '../models';
const findUser = async (authToken) => {
    // Find a user by their auth token
    console.log('findUser', authToken)
    return { id: 1, name: 'Test User' };
};
const tokenIsNotValid = (connectionParams) => {
    // Check if the token is valid
    console.log('tokenIsNotValid', connectionParams)
    return false;
};
const secretKey = process.env.ENCRYPTION_KEY || config.passphrase; // Utiliza una variable de entorno o fallback a config

const encrypt = (text) => CryptoJS.AES.encrypt(text, secretKey).toString();

const decrypt = (ciphertext) => {
    const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
};

// Función para desencriptar la contraseña (actualizada para usar la función decrypt)
async function desencriptarPassword(passwordEncriptada) {
    return decrypt(passwordEncriptada);
}

// Utilidad para crear hash de contraseña
async function hashPassword(password) {
    return await bcrypt.hash(password, config.saltRounds);
}
export const getDynamicContext = async (req) => {
    const token = req.headers.authorization || '';
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await models.User.findByPk(decoded.user_id);
        return { user };
    } catch (error) {
        // Manejar error o devolver un contexto sin usuario
        return {};
    }
};
export function authorizeUser(roleIdAdmin, roleIdCustomer) {
    return (parent, args, context, info) => {
        const { user } = context;

        // Verifica si el contexto contiene un usuario autenticado
        if (!user) {
            throw new Error('Acceso denegado: No autenticado');
        }

        // Verificar si el usuario es admin
        if (user.role_id === roleIdAdmin) {
            return; // El usuario es admin y puede proceder
        }

        // Verificar si el usuario es un cliente asociado con la compañía en cuestión
        if (user.role_id === roleIdCustomer && user.company_id === args.company_id) {
            return; // El usuario es un cliente asociado y puede proceder
        }

        // En cualquier otro caso, el acceso es denegado
        throw new Error('Acceso denegado: No autorizado');
    };
}
// Set up ApolloServer.
module.exports = {
    getDynamicContext,
    tokenIsNotValid,
    desencriptarPassword,
    hashPassword,
    encrypt,
    decrypt,
    // Cualquier otra función que desees exportar...
};
