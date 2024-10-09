import Express from "express";
import Student from "../../models/student.js";
import httpStatus from "../../utils/httpStatus.js";
import upload from "../../utils/multer.js";
import bcrypt from  'bcrypt';




const getProfile = async (req, res) => {
  try {
    const studentId = req.params.id;
    const profile = await Student.findById(studentId).select("-password").populate("group");

    if (!profile) {

      return res.status(404).json({status:httpStatus.FAIL ,message: "Profile not found" });
                  }
      return res.status(200).json({status:httpStatus.SUCCESS, data : profile});
     }
  catch (error) {
    return res.status(400).json({ status:httpStatus.ERROR,message: "invalid ID" });
  }
};


const updateProfile=async(req,res)=>{
    
    try{
        let studentId = req.params.id; //ki  nekhdem lcookies mte3 l'auth, l'id nwelli nekhdhou mel cookie

        const profile = req.body;
        if (req.file) {
          profile.picture = req.file.path;
        }
        if(req.password)
        {
          profile.password =bcrypt.hashSync(req.password,10) ;
        }

        const updatedProfile =await Student.findByIdAndUpdate(studentId,profile,{new:true}) ;
      
        if(!updatedProfile){
           return  res.status(400).json({status:httpStatus.ERROR,msg:'error in updating!'})
        }else{
         return res.status(200).json({status:httpStatus.SUCCESS, data:updatedProfile});
        }
    }catch(err){
        return res.status(500).json({status: httpStatus.ERROR, msg: 'Internal Server Error!'})
    }

};

const updatePassword = async (req, res) => {
  const studentId = req.params.id;
  const oldPassword = req.body.oldPassword;
  const newPassword = bcrypt.hashSync(req.body.newPassword, 10);

  try {

    const student = await Student.findById(studentId);

    if (!student) {
      return res
        .status(404)
        .json({ status: httpStatus.NOT_FOUND, msg: "Student not found!" });
    }

    
    const isPasswordValid = bcrypt.compareSync(oldPassword, student.password); 

    if (!isPasswordValid) {
      return res
        .status(400)
        .json({
          status: httpStatus.BAD_REQUEST,
          msg: "Old password is incorrect!",
        });
    }

    const updatedStudent = await Student.findByIdAndUpdate(
      studentId,
      { password: newPassword },
      { new: true }
    );

    if (!updatedStudent) {
      return res
        .status(400)
        .json({ status: httpStatus.ERROR, msg: "Error in updating!" });
    }

    return res.status(200).json({ status: httpStatus.SUCCESS, updatedStudent });
  } catch (error) {
    return res
      .status(500)
      .json({ status: httpStatus.ERROR, msg: "Internal Server Error!" });
  }
};


export default {
  getProfile,updateProfile,updatePassword
}