import express from 'express';
import { registerUser, loginUser, logoutUser, refreshAccessToken } from '../controllers/auth.controller.js';

const router = express.Router();
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.post('/refresh', refreshAccessToken);

export default router;