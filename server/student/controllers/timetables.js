

import Timetable from "../../models/timetable.js"
import httpStatus from "../../utils/httpStatus.js";
export const getTimeTable=async (req,res)=>{
   try { const {groupeId}=req.params
   console.log(groupeId)
    const timetable= await Timetable.findOne({groupe:groupeId});
    if(!timetable) return res.status(404).json({msg:"Timetable for that group not found"})
    if(!timetable.timetable ||timetable.timetable.length===0 )  return res.status(204).json({msg:"Timetable empty"})
    return res.status(200).json({data:timetable.timetable})
}
catch(err){
console.log("error while fetching timetable"+err);
res.status(500).json({msg:"error while feteching timetable"})

}
}
