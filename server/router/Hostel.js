import express from 'express';
import { GetVerifiedHostel, GetHostel, GetUnverifiedHostel, DeleteHostel, EditHostel } from '../controller/Hostel.js';

const router = express.Router();

router.get('/verified', GetVerifiedHostel);
router.post('/', GetHostel);
router.get('/unverified', GetUnverifiedHostel);
router.patch('/:id', EditHostel);
router.delete('/:id', DeleteHostel);
export default router;