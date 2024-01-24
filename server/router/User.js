import express from 'express';
import { GetUser, LoginUser, SignupUser } from '../controller/User.js';

const router = express.Router();

router.get('/', GetUser);
router.post('/signup', SignupUser);
router.post('/login', LoginUser);

export default router;