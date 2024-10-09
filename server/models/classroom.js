import mongoose from "mongoose"


const classroomSchema= new mongoose.Schema({
    nom:{
        type:String
        
    }
    
});

const Classroom=mongoose.model("Classroom",classroomSchema,"Classroom");
export default Classroom;