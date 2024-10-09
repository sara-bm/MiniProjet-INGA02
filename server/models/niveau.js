import mongoose from "mongoose";

const niveauSchema=new mongoose.Schema(
{
    name:{
        type:String,
    },
    niveau:{
        type:String
    },
    field:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Field"
    },
    subjects:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Subjet"
    }]
}
)

const Niveau=mongoose.model("Niveau",niveauSchema,"Niveau");
export default Niveau;