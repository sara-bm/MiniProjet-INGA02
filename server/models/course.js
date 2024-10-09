import mongoose from "mongoose";

const courseSchema=new mongoose.Schema({
    subject:{type:mongoose.Schema.Types.ObjectId,ref:"Subject",required:true},
    title:{type:String},
    files:[{path:{type:String},name:{type:String}}]
});


const Course=mongoose.model("Course",courseSchema,"Course");
export default Course;