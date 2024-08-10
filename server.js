import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import databaseConnection from './config/db.js';
import userRoutes from './routes/userRoutes.js';
const server = express();

dotenv.config();
server.use(cors()); 
server.use(express.json());

server.use("/api",userRoutes);

const PORT = process.env.PORT || 5000;
server.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  await databaseConnection();
});

