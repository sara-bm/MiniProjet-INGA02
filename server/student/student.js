import Express from "express";
import profileRouter from "./routers/profile.js";
import databaseConnection from "../myDbConnection.js";
import groupRouter from "./routers/group.js";
import absenceRouter from "./routers/absence.js"
import courseRouter from "./routers/subject.js"
import newsRouter from "./routers/news.js"
import TimetableRoute from "./routers/timetable.js";
import dotenv from "dotenv";
import loginRouter from "./authentication/loginRouter.js";
import registerRouter from "./authentication/registerRouter.js";
import morgan from "morgan";
import cors from "cors";

dotenv.config();
const port = process.env.PORT;

databaseConnection();

const app = Express();


app.use(cors());

app.use(morgan("tiny"));
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));


app.use('/student/login',loginRouter);
app.use("/student/register",registerRouter);
app.use("/student/subject",courseRouter);
app.use("/student/profile", profileRouter);
app.use("/student/group",groupRouter);
app.use("/student/absence",absenceRouter);
app.use("/student/news",newsRouter);
app.use("/student/profile", profileRouter);
app.use("/student/group",groupRouter);
app.use("/student/timetable",TimetableRoute)
app.use("/student/absence",absenceRouter);


app.listen(port, () => {
  console.log("litening on port ");
});



const authenticateToken=async (req,res,next)=>{
 try { const authHeader=req.headers['authorization'];
  const token=authHeader && authHeader.split(' ')[1]

if(token==null)
return res.sendStatus(401);

JsonWebTokenError.verify(token,process.env.ACCESS_TOKEN_SECRER,(err,user)=>{
if(err) return res.sendStatus(400);
req.user=user;
next();

})}
catch(err){

}

}
