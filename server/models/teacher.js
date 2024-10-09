import mongoose from "mongoose";
import Department from "./subjectNiveau";

const teacherSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  secondName: {
    type: String,
  },

  idNumber: {
    type: String,
    required: true,
    unique:true

  },
  registrationNumber: {
    type: String,
    required:true,
    unique:true
  },
  birthDate: {
    type: Date,
    default:null
  },
  recruitmentDate: {
    type: Date,
    required: true,
  },
  grade: {
    type: String,
    required: true,
    
  },
  salary: {
    type: Float,
    
  },
  picture: {
    type: String,
    default:null
  },
  email: {
    type: String,
    default: null,
    unique: true,
    validate: [validator.isEmail, "Invalid Email Address"],
  },
  address: {
    type: String,
    default:null
  },
  number: {
    type: String,
    default:null
  },
  password: {
    type: String,
    
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department",
  },
});

const Teacher=mongoose.model( "Teacher", teacherSchema ,"Teacher");
export default Teacher;