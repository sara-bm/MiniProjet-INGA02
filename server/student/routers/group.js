import express from"express";
import groupController from "../controllers/group.js"
const router = express.Router();


router.get("/:id",groupController.getGroupList);


export default router;