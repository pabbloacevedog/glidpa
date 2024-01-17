import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/config.js';
// Middleware de autenticación con JWT
const authenticateJWT = (req, res, next) => {
    // console.log('req', req);
    // console.log('res', res);

    let token;
    if (req.cookies) {
        token = req.cookies.authToken;
    } else {
        return res.status(401).json({ message: 'No se proporcionó un token JWT.' });
    }

    try {
        const decodedToken = jwt.verify(token, JWT_SECRET); // Usa tu JWT_SECRET real
        req.user = decodedToken;
        next(); // Continúa con la siguiente middleware
    } catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            return res.status(401).json({ message: 'El token JWT ha caducado.' });
        } else {
            return res.status(401).json({ message: 'Token JWT no válido.' });
        }
    }
};
export default authenticateJWT;
