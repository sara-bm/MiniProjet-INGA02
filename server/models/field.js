import mongoose from "mongoose";

const fieldSchema=new mongoose.Schema(
{
    name:{
        type:String,
    },
    code:{
        type:String,
    },
    type:{
        type:String
    },
    description:
    {
        type:String
    },
    
}
)

const Field=mongoose.model("Field",fieldSchema,"Field");
export default Field