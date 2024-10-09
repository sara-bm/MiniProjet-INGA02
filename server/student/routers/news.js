import express from "express";
import newsController from "../controllers/news.js";
import upload from "../../utils/multer.js";
const router=express.Router();

router.get("/",newsController.getAllNews);
router.get("/:id",newsController.getNews);
router.post("/",upload.single("document"),newsController.addNews);

export default router;