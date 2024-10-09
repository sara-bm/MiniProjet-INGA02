import Subjects from "../../models/subject.js"
import Students from "../../models/student.js"
import Group from "../../models/group.js"
import Level from "../../models/niveau.js"
import Attachements from "../../models/attachements.js"
import Niveau from "../../models/niveau.js"
import fs from 'fs'
import path from "path"


export  const getCourses=async (req,res)=>{

    try
{const {idNumber}=req.params;
console.log(idNumber)
const student =await Students.findById(idNumber);
console.log(student)
const studentGroup=await Group.findOne({_id:student.group});
const studentNiveau=await Level.findOne({_id:studentGroup.niveau});

console.log(studentGroup)
console.log(studentNiveau)
const subjectNames=[]
for(const subjectId of studentNiveau.subjects){

  const  subject= await Subjects.findOne({_id:subjectId});
  console.log(subject)
  if(subject) subjectNames.push(subject.name)
}
// const subjectsId=studentNiveau.subjects.map( async (subject)=>await Subjects.find({subjects:{$in:subject}}))


// const subjectNames=subjectsId.map( async (subject)=> subject.name);
return res.status(200).json({subjects:subjectNames});
}
catch(err){
    console.log(err)
    return res.status(500).json({error:"error while fetching courses"})
}

}


export const getCourseAttachments=async (req,res)=>{
try
{    const {coursName,niveauName}=req.params;
console.log("hii")
console.log(req.params)
    const course=await Subjects.findOne({name:coursName})
    console.log(course)
   const niveau=await Niveau.findOne({name:niveauName})
   console.log(niveau)
    if (!course) {
        return res.status(404).json({ error: 'Course not found' });
    }
    const AllAttch=await Attachements.find({})
 const attachments=await Attachements.find({course:course._id,niveau:niveau._id})
 console.log(AllAttch)
console.log(attachments)

if (!attachments) {
    return res.status(404).json({ error: 'No attachments found for this course' });
}

// //for (const attachment of attachments) {
//     const attachment=attachments[0]
//     console.log(attachment.content);



//  const fileStream = fs.createReadStream(attachment.content);

// res.writeHead(200, {
//     'Content-disposition': 'attachment; filename="' + encodeURIComponent(path.basename(attachment.content))  + '"',
//     'Content-type': 'application/pdf',
// });


//  fileStream.pipe(res, { end: false });

//     fileStream.on('end', () => {
//       res.write('\n\n\n'); // Add new lines as separator
//     });

//   }
//   res.end()
//      console.log("sent")


  const stat = fs.statSync(attachments[0].content);

  // Set the appropriate headers for PDF response
  res.setHeader('Content-Length', stat.size);
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=file.pdf');

  // Read the PDF file and stream it to the response
  const readStream = fs.createReadStream(attachments[0].content);
  readStream.pipe(res);



}
catch(err){
    console.log(err)
    return res.status(500).json({error:"error while fetching courses attachements"})
}

}