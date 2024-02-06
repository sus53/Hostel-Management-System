import { Router } from "express";
import { GetHostelReview, AddHostelReview } from "../controller/HostelReview.js";

const router = Router();

router.post("/", GetHostelReview);
router.post("/addhostelreview", AddHostelReview);

export default router;