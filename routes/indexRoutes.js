import express from 'express';
import { getUserInfo } from '../handlers/indexHandlers.js';
import { authenticate } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', authenticate, getUserInfo);

export default router;
