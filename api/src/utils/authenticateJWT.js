import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/config.js';
// Middleware de autenticación con JWT
// const authenticateJWT = (req, res, next) => {
//     // console.log('req', req);
//     // console.log('res', res);

//     let token;
//     if (req.cookies) {
//         token = req.cookies.authToken;
//     } else {
//         return res.status(401).json({ message: 'No se proporcionó un token JWT.' });
//     }

//     try {
//         const decodedToken = jwt.verify(token, JWT_SECRET);
//         req.user = decodedToken;
//         next(); // Continúa con la siguiente middleware
//     } catch (error) {
//         if (error instanceof jwt.TokenExpiredError) {
//             return res.status(401).json({ message: 'El token JWT ha caducado.' });
//         } else {
//             return res.status(401).json({ message: 'Token JWT no válido.' });
//         }
//     }
// };
const authenticateJWT = (req, res, next) => {
    let token = req.cookies ? req.cookies.authToken : null;

    if (!token) {
        return res.status(401).json({ message: 'No se proporcionó un token JWT.' });
    }

    jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
        if (err) {
            if (err instanceof jwt.TokenExpiredError) {
                return res.status(401).json({ message: 'El token JWT ha caducado.' });
            } else {
                return res.status(401).json({ message: 'Token JWT no válido.' });
            }
        } else {
            // Renovar y enviar un nuevo token en cada petición válida
            const newToken = jwt.sign({ userId: decodedToken.userId }, JWT_SECRET, { expiresIn: '1h' });
            res.cookie('authToken', newToken, {
                httpOnly: true,
                // secure: true, // Descomentar en producción si estás utilizando HTTPS
                // sameSite: 'strict', // O 'lax' si es necesario para solicitudes cross-site
            });

            // Pasar al siguiente middleware
            req.user = decodedToken;
            next();
        }
    });
};

export default authenticateJWT;
