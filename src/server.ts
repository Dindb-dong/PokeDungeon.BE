import express from 'express';
import authRoutes from './routes/authRoutes';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './db';
connectDB();
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});