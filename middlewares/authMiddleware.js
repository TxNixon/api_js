import jwt from 'jsonwebtoken';

const JWT_SECRET = 'secrettt_yaaaaa';

export const authenticate = (req, res, next) => {
    const token = req.cookies.authToken;

    if (!token) {
        return res.status(401).json({ success: false, message: 'Authentication token is missing. Please login.' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ success: false, message: 'Invalid authentication token. Please login again.' });
    }
};
