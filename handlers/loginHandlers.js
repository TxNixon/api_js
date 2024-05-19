import pool from './db.js';
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'your_secret_key'; // Use a strong secret key

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const [user] = await pool.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password]);

    if (user.length === 0) {
        return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

    // Create JWT token
    const token = jwt.sign({ id: user[0].id, email: user[0].email, role: user[0].role }, JWT_SECRET, { expiresIn: '1h' });

    // Set cookie
    res.cookie('authToken', token, { httpOnly: true });

    return res.status(200).json({ success: true, token });
};
