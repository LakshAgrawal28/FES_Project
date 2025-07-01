import dotenv from 'dotenv';
dotenv.config();


import { connectDB } from './db/index.js';
import { app } from './app.js';
const PORT = process.env.PORT || 8000;

connectDB();

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));