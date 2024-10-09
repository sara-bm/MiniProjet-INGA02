import mongoose from "mongoose";

const subNivSchema=new mongoose.Schema(
{
    niveau: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Niveau',
        // required:true 
    },
  
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject' ,
        required:true
    },
    coeffecient:{
        type:Number,
      //  required:true
    }
}
)

const SubjectNiveau=mongoose.model("SubjectNiveau",subNivSchema,"SubjectNiveau");
export default SubjectNiveau;