import { Note } from '../models/notes.model.js';

export const getNotes = async (req, res) => {
  const notes = await Note.find({ user: req.user._id });
  res.json(notes);
};

export const createNote = async (req, res) => {
  const { title, content } = req.body;
  const note = await Note.create({ title, content, user: req.user._id });
  res.status(201).json(note);
};

