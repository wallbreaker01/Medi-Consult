import express from "express";
import { handleChat } from "../controllers/aiController.js";
import { addReport, genReport, getReport } from "../controllers/reportController.js";

const router = express.Router();

router.post("/chat", handleChat);
router.post("/report",genReport);
router.get("/report/:id",getReport);
router.post("/add-report", addReport);

export default router;
