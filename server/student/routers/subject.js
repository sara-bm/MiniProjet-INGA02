import {getCourses,getCourseAttachments} from '../controllers/subject.js'
import express from "express"

const router=express()

router.get("/get-courses/:idNumber",getCourses);
router.post("/get-course-attachements/:coursName/:niveauName",getCourseAttachments);

export default router