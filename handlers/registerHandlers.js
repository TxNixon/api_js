import pool from './db.js';

export const registerUser = async (req, res) => {
    const { fullname, email, password, role } = req.body;
    const errors = {};

    // Validation and error handling
    if (!fullname || fullname.trim() === '') {
        errors.fullname = "Full name is required";
    }
    if (!email || email.trim() === '') {
        errors.email = "Email is required";
    } else {
        const [existingUser] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
        if (existingUser.length > 0) {
            errors.email = "Email already exists";
        }
    }
    if (!password || password.trim() === '') {
        errors.password = "Password is required";
    }
    if (!role || role.trim() === '') {
        errors.role = "Role is required";
    }

    // If there are errors, return 400 with error messages
    if (Object.keys(errors).length > 0) {
        return res.status(400).json({ success: false, errors });
    }

    // Insert new user into the database
    await pool.query('INSERT INTO users (fullname, email, password, role) VALUES (?, ?, ?, ?)', [fullname, email, password, role]);
    const [newUser] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);

    return res.status(201).json({ success: true, user: newUser[0] });
};
