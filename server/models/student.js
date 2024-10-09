import mongoose from "mongoose";
import validator from "validator"


const studentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  secondName: {
    type: String,
  },
  idNumber:{ //cin ,passeport
    type:String,
    default:null,
    unique:true
  }
  ,
  registrationNumber:{ // num d'inscription
    type:String,
    required:true,
    unique:true
  }
,
  birthDate:{
    type:Date,
    default:null

  },
  picture: {
    type: String,
    default:null
  },
  email: {
    type: String,
    default:null,
    unique:true,
    validate:[validator.isEmail, 'Invalid Email Address']
  },
  address: {
    type: String,
    default:null
  },
  number: {
    type: String,
    default:null
  },
nationality:{
    type:String,
    default:null
}
,
password:{
    type:String,
    required:true,
    default:null
}
,
group:{
    type:mongoose.Schema.Types.ObjectId,
    ref: "Group"

}
});

const Student=mongoose.model("Student",studentSchema,"Student");
export default Student;
