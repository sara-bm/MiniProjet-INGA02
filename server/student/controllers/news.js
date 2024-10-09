
import News from "../../models/news.js"
import httpStatus from "../../utils/httpStatus.js"



const addNews = async (req, res) => {
    try {
        
        const { title, content } = req.body;

        
         let document;
        if (req.file) {
            document = req.file.path
            };
        
        
        const newNews = new News({
            title,
            content,
            document
            
        });

        
        const savedNews = await newNews.save();
         return res
           .status(200)
           .json({ status: httpStatus.SUCCESS, data: savedNews });
    } catch (error) {
       
        return res
          .status(500)
          .json({
            status: httpStatus.ERROR,
            message: "Internal Server Error!",
          });
    }
};
const getAllNews=async(req,res)=>{
  try{
    const newsList = await News.find();
    if(!newsList){
        return res.status(200).json({status:httpStatus.SUCCESS,message:"No data found!"});
    }
    return res.status(200).json({status:httpStatus.SUCCESS,data:newsList});

  }
  catch(error){
    console.error("Error in getAllNews:", error);
    return  res.status(500).json({status:httpStatus.ERROR,message:"Internal Server Error!"});
  }
};

const getNews= async (req,res) => {
    try{
        const newsId = req.params.id;
        const news = await News.findById(newsId);
        if (!news) {
          return res.status(404).json({ status: httpStatus.FAIL, message: "Error Getting Data" });
        }
        return res
          .status(200)
          .json({ status: httpStatus.SUCCESS, data: news });
  

    }catch(error){
        return res
          .status(500)
          .json({
            status: httpStatus.ERROR,
            message: "Internal Server Error!",
          });
    }
  

};

export default{
   addNews, getAllNews,getNews
}