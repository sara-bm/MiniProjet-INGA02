import mongoose from "mongoose";

const subjectSchema=new mongoose.Schema(
{
    name:{
        type:String,
        required:true
    },
  code:{
    type:String,
    required:true
  }

}
)

const Subject=mongoose.model("Subject",subjectSchema,"Subject");
export default Subject;