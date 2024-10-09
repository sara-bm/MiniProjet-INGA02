import Express from "express";
import profileController from "../controllers/profile.js";
import upload from "../../utils/multer.js";
const router = Express.Router();

router.post("/:id", upload.single("picture"), profileController.updateProfile);
router.put("/:id", profileController.updatePassword);
router.get("/:id", profileController.getProfile);

export default router;
