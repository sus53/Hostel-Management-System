import express from 'express';
import { GetHostel, AddHostel, DeleteHostel, EditHostel } from '../controller/Hostel.js';

const router = express.Router();

router.get('/', GetHostel);
router.post('/', AddHostel);
router.put('/:id', EditHostel);
router.delete('/:id', DeleteHostel);
export default router;