import mongoose from "mongoose";

const departmentSchema=new mongoose.Schema(
{
    name:{
        type:String,
    },
  
    fields: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Field' 
    }]
}
)

const Department=mongoose.model("Department",departmentSchema,"Department");
export default Department;