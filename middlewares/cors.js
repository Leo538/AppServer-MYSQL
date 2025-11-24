import cors from 'cors';

// Orígenes aceptados desde variables de entorno o por defecto
const FRONTEND_URL = process.env.FRONTEND_URL || '';
const ACCEPTED_ORIGINS = [
    'http://localhost:8080',
    'http://localhost:8000',
    'http://127.0.0.1:8080',
    'http://127.0.0.1:8000',
    ...(FRONTEND_URL ? [FRONTEND_URL] : [])
];

export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) => cors({
    origin: (origin, callback) => {
        if (acceptedOrigins.includes(origin)) {
            return callback(null, true);
        }
        // Permitir requests sin origin (Postman, mobile apps, etc.)
        if (!origin) {
            return callback(null, true);
        }
        // En desarrollo, permitir todos los orígenes (cambiar en producción)
        if (process.env.NODE_ENV !== 'production') {
            return callback(null, true);
        }
        return callback(new Error('Not allowed by CORS'));
    }
});