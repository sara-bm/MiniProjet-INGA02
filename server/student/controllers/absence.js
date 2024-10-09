import httpStatus from "../../utils/httpStatus.js";
import Absence from "../../models/absence.js"

const getAbsenceList=async (req,res)=>{
    try{
        const studentId= req.params.id;
        const absenceList=await Absence.find({student:studentId}); 

    if(!absenceList) {
    return res.status(200).json({status:httpStatus.SUCCESS,message:'No absences found'});
}

    res.status(200).json({status:httpStatus.SUCCESS,data:absenceList});
        
    }catch(err){
        
        res.status(500).send({status:httpStatus.ERROR, message:"Interval Server Error"});

    }
    
};

export default {getAbsenceList}