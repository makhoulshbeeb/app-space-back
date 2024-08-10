import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import databaseConnection from './config/db.js';

const server = express();

dotenv.config();
server.use(cors()); 
server.use(express.json());


const PORT = process.env.PORT || 5000;
server.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  await databaseConnection();
});

