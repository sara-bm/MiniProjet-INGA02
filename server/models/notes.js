import mongoose from "mongoose";

const subjectNotesSchema=new mongoose.Schema(
{

    student:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Student"
    },
    subject:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Subject"

    },
    tpNote:{
        type:float
    },
    dsNote:{
        type:float
    },
    examenNote:{
        type:float
    },

  

}
)

const SubjectNotes=mongoose.model("SubjectNotes",subjectNotesSchema,"SubjectNotes");
export default SubjectNotes;
