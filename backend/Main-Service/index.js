import express from 'express';
import routes from './routes/index.js'
import {connectDB} from './config/db.js'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url';
import cors from 'cors';


dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use(cors()); // CORS'u etkinleştir
app.use(express.json());

app.use(express.urlencoded({extended: true}))

connectDB();

app.use('/api', routes)

app.listen(3000, () =>  {
    console.log('ayaktayiz')
})