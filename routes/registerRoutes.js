import express from 'express'

import {
    registerUser,
  } from '../handlers/registerHandlers.js';
  
const router = express.Router();

router.post('/register', registerUser);

export default router