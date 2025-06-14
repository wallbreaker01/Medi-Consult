import express from "express";
import { handleChat } from "../controllers/aiController.js";
import { genReport } from "../controllers/reportController.js";

const router = express.Router();

router.post("/chat", handleChat);
router.post("/report",genReport)

export default router;
