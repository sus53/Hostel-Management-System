import express from 'express';
import { GetUser, LoginUser, SignupUser, ForgotPassword, ResetPassword } from '../controller/User.js';

const router = express.Router();

router.get('/', GetUser);
router.post('/signup', SignupUser);
router.post('/login', LoginUser);
router.post('/forgotPassword', ForgotPassword);
router.post('/resetpassword', ResetPassword);

export default router;