import express from "express";
import absenceController from "../controllers/absence.js";
const router = express.Router();

router.get("/:id",absenceController.getAbsenceList);

export default  router;