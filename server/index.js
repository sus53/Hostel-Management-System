import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import multer from 'multer';
import { fileURLToPath } from 'url';
import mongoose from "mongoose";
import UserRouter from './router/User.js';
import HostelRouter from './router/Hostel.js';
import { AddHostel } from './controller/Hostel.js';
import HostelReviewRouter from './router/HostelReview.js';

/* Configurations */

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/assets', express.static('public/assets'));
/* File Storage */

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/assets')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage });

/*Routes with files*/

app.post('/hostel/addhostel', upload.array('image', 3), AddHostel);


/* Routes */
app.use('/user', UserRouter);
app.use('/hostel', HostelRouter);
app.use('/hostelreview', HostelReviewRouter);

/* Mongoose Setup */

mongoose.connect(process.env.mongodb).then(() =>
    app.listen("https://hostel-management-system-five.vercel.app", () => console.log(`sanoghar is running on "https://hostel-management-system-five.vercel.app"`)))
    .catch(err => console.log(err));