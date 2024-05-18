import { users } from './db.js';

const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};

const isEmailExist = (email) => {
    return users.some(user => user.email === email);
};

const generateId = () => {
    return Date.now().toString();
}
export const registerUser = (req, res) => {
    const { fullname, email, password } = req.body;
    const errors = {};

    
    if (!fullname || fullname.trim() === '') {
        errors.fullname = "Full name is required";
    }

    if (!email || email.trim() === '') {
        errors.email = "Email is required";
    } else if (!validateEmail(email)) {
        errors.email = "Email is not valid";
    } else if (isEmailExist(email)) {
        errors.email = "Email already exists";
    }

    
    if (!password || password.trim() === '') {
        errors.password = "Password is required";
    }

    if (Object.keys(errors).length > 0) {
        console.log('Validation errors:', errors);
        return res.status(400).json({ success: false, errors });
    }

    const newUser = { 
        id: generateId(),
        fullname,
        email,
        password 
    };
    users.push(newUser);

    return res.status(201).json({ success: true, user: newUser });
};
