import express from"express";
import register from "./register.js"

const router = express.Router();


router.post("/",register);
export default router;