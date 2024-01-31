import express from 'express';
import { GetUser, LoginUser, SignupUser, ForgotPassword } from '../controller/User.js';

const router = express.Router();

router.get('/', GetUser);
router.post('/signup', SignupUser);
router.post('/login', LoginUser);
router.post('/forgotPassword', ForgotPassword);

export default router;