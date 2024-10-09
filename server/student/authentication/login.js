import bcrypt from "bcrypt"
import  Student  from "../../models/student.js";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config(); 

const studentLogin=async (req,res)=>{
    console.log(req.body)
    const { email, password } = req.body;
 try { 
     const user = await Student.findOne({ email });

    if (!user) {
        return res.status(400).json({ error: "Invalid username or password" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(400).json({ error: "Invalid username or password" });
    }
    console.log(user);
    delete user.password;
    const accessToken = jwt.sign(user.toJSON(), process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1h" });
   const refreshToken=jwt.sign(user.toJSON(),process.env.REFRESH_TOKEN_SECRET)
    res.status(200).json({id:user._id,accessToken:accessToken,refershToken:refreshToken});
}
catch(error){
console.log(error);
res.status(500).json({message:"internal error"});
}
}

 
export default studentLogin; 