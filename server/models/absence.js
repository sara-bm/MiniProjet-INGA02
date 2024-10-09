import mongoose from "mongoose";

const absenceSchema=new mongoose.Schema({
    student: { type:mongoose.Schema.Types.ObjectId, ref:"Student" },
    session:{type:mongoose.Schema.Types.ObjectId,ref:'Session'},
    //n7ot just session khater hiya deja feha date donc bech na3ref date l'absnece session.date
});

const Absence=mongoose.model("Absence",absenceSchema,"Absence");
export default  Absence;