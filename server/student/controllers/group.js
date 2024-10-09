import express from 'express';
import Student from '../../models/student.js';
import httpStatus from '../../utils/httpStatus.js';



const getGroupList = async (req, res) => {
  const studentId = req.params.id; 

  try {
   
    const student = await Student.findById(studentId);

    if (!student) {
      return res.status(404).json({status:httpStatus.ERROR, message: "student not found" });
    }


    const groupList = await Student.find({
      group: student.group,
    });

    
    res.status(200).json({status:httpStatus.SUCCESS, data:{groupList}});
  } catch (error) {
    
    res.status(500).json({ message: "Internal server error" });
  }
};

export default {getGroupList}; 