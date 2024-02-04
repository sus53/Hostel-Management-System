import { Router } from "express";
import { GetHostelReview, AddHostelReview } from "../controller/HostelReview.js";

const router = Router();

router.get("/", GetHostelReview);
router.post("/", AddHostelReview);

export default router;