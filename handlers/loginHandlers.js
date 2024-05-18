import { users } from './db.js';
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'secrettt_yaaaaa';

export const loginUser = (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
        return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: '1h' });

    res.cookie('authToken', token, { httpOnly: true });

    return res.status(200).json({ success: true, token });
};
