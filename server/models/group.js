import mongoose from "mongoose";

const groupSchema=new mongoose.Schema(
{
    groupNumber:{
        type:String,
        required:true
    },
    studentsNumber:{
        type:Number
    },
    niveau:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Niveau"
    }
}
)

const Group=mongoose.model("Group",groupSchema,"Group");
export default Group;