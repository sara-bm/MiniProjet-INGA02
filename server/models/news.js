import Mongoose  from "mongoose";


const newsSchema= new Mongoose.Schema({
    title: { type : String , required : true },
    content: {type : String,required :true},
    date: { type : Date , default : Date.now() },
    document:{type:String,required:false}

});

const  News = Mongoose.model("News",newsSchema,"News");
export default News;