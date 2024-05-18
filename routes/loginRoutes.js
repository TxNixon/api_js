import express from 'express';
import { loginUser } from '../handlers/loginHandlers.js';

const router = express.Router();

router.post('/login', loginUser);

export default router;
