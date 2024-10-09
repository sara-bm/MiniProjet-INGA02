import mongoose from "mongoose";

const attachementsSchema=new mongoose.Schema(
{
    course:{
        type:mongoose.Schema.ObjectId,
        ref:"Subject",
        required:true
    },
    
    niveau:{
        type:mongoose.Schema.ObjectId,
        ref:"niveau",
        required:true
    },
    content:{
        type:String,
    },
    name:{
        type:String,
    },


    date:{
        type:Date,

    },
  

}
)

const  Attachements=mongoose.model("Attachements",attachementsSchema,"Attachements");
export default Attachements;