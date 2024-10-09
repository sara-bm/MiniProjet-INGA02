import express from"express";

import {getTimeTable} from "../controllers/timetables.js"

const router = express.Router();

router.post("/:groupId",getTimeTable)

export default router;