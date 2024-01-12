import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/config.js';
// Middleware de autenticación con JWT
const authenticateJWT = async ({ req, res, next }) => {
	const token = req.cookies.authToken;

	if (!token) {
		return res.status(401).json({ message: 'No se proporcionó un token JWT.' });
	}

	try {
		const decodedToken = jwt.verify(token, JWT_SECRET); // Reemplaza 'tu_secreto' por tu clave secreta real

		// Si el token es válido, puedes agregar la información del usuario decodificado al objeto de solicitud
		req.user = decodedToken;

		next(); // Continúa con la siguiente middleware
	} catch (error) {
		if (error instanceof jwt.TokenExpiredError) {
			// En caso de que el token haya caducado
			return res.status(401).json({ message: 'El token JWT ha caducado.' });
		} else {
			// En caso de otros errores JWT
			return res.status(401).json({ message: 'Token JWT no válido.' });
		}
	}
}
export default authenticateJWT;
