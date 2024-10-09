import bcrypt from "bcrypt";
import Student from "../../models/student.js";
import mongoose from "mongoose";
const register=async (req, res) => {
 
    let user = await Student.findOne({ email: req.body.email })
    if (user) {
        return res.status(400).send('User already exisits. Please sign in')
    } else {
        try {
            const salt = await bcrypt.genSalt(10)
            const password = await bcrypt.hash(req.body.password, salt)
            const user = new Student({
                firstName: req.body.firstName,
                secondName: req.body.secondName,
                email: req.body.email,
                idNumber:req.body.idNumber,
                registrationNumber:req.body.registrationNumber,
                birthDate:req.body.birthDate,
                address:req.body.address,
                group:new mongoose.Types.ObjectId(req.body.group),
                nationality:req.body.nationality || "",
                number:req.body.number || "",
                password: password
            
            })
            await user.save();
            console.log("new user saved");
            return res.status(201).json(user)
        } catch (error) {
            console.log(error)
            return res.status(400).json({ message: error.message})
        }
    }
}

export default register;