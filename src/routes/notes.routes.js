import express from 'express';
import { getNotes, createNote } from '../controllers/notes.controller.js';
import { protect } from '../middlewares/auth.middleware.js';

const router = express.Router();
router.use(protect);
router.route('/').get(getNotes).post(createNote);

export default router;
