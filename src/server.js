import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { climateRoutes } from './routes/climate.js';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000
const app = express();

app.use(cors())
app.use(express.json());

app.use(express.static(path.join(__dirname, '../front-end')));

app.use("/api", climateRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
