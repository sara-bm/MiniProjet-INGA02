import mongoose from "mongoose";

const timetableSchema=new mongoose.Schema({

    group:{type:mongoose.Schema.Types.ObjectId,ref:"Group",required:true},
    timetable:[{
        
            day:{
                type:String,
            },
            seances:[{
                type:mongoose.Schema.Types.ObjectId,
                ref:"Session"
            }]
        
    }]
});

const  Timetable = mongoose.model("Timetable",timetableSchema,"Timetable");
export default Timetable;


