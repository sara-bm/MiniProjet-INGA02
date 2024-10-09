import Subject from "./models/subject.js"
import Attachements from  "./models/attachements.js"
import Niveau from "./models/niveau.js"
import Field from "./models/field.js"
import SubjectNiveau from "./models/subjectNiveau.js"
import databaseConnection from "./myDbConnection.js"
import mongoose from "mongoose"
import Group from "./models/group.js"
import Student from "./models/student.js"
import pdfDocument from "pdfkit"
import fs from "fs"
async function addSubjects() {
    const subjects = [
        { code: '7305', name: 'Développement Web' },
        { code: '7304', name: 'Développement Avancé' },
        { code: '7307', name: 'Middlewares et Intégration d\'Applications' },
        { code: '7309', name: 'Sécurité des réseaux' },
        { code: '7302', name: 'Analyse Numérique' },
        { code: '7402', name: 'Algorithmique et architectures parallèles' },
        { code: '7409', name: 'BD avancées' },
        { code: '7404', name: 'Web 2.0 et Web 3.0' },
        { code: '7411', name: 'Qualité, Audit, Gestion de projets (PMP)' },
        { code: '7408', name: 'Mini Projet' },
        { code: '7403', name: 'Sécurité des logiciels et des systèmes d\'information' }
    ];

    for (const subject of subjects) {
        console.log(subject);
        const newSubject = new Subject(subject);

        try {
            const savedSubject = await newSubject.save();
            console.log('New subject saved:', savedSubject);
        } catch (err) {
            console.error('Error saving subject:', err);
        }
    }
}




async function addFields(){

const field=new Field({
    name:"ING-GL",
    code:"1",
  
})
console.log(field)
await field.save();
}

async function addNiveau(fieldName,niveau){
  const subjects=await Subject.find();
  const subjectId=subjects.map((subject)=>subject._id)
  const field=await Field.findOne({name:fieldName});
  const newNiveau=new Niveau({
    name:`${field.name}-${niveau}`,
    niveau:niveau,
    field:field._id,
    subjects :subjectId,
  })
  await newNiveau.save();
  console.log(newNiveau)
}



async function addSubjectNiveau(niveau){
    const subjects=await Subject.find();
    const niveauId=await Niveau.findOne({name:niveau}).select({_id:1});
    console.log(subjects);
    console.log(niveauId)
    for(const subjectId of subjects){
        console.log(subjectId)
    const subjectniv=new SubjectNiveau({
        niveau:niveauId._id,
        subject:subjectId._id,
        coeffecient:2
    })
   await  subjectniv.save()
   console.log(subjectniv)
    }


}


async function addAttachements(subjectCode,attachementPath,nivauName){
console.log("hi");
const subject=await Subject.findOne({code:subjectCode});
const niveau=await Niveau.findOne({name:nivauName});
console.log(subject)
console.log(niveau)

// // Create a buffer from the saved PDF file
// const doc=new pdfDocument();
// doc.pipe(fs.createWriteStream(attachements));
// const pdfBuffer = fs.readFileSync(attachements);
const filePath="static/coursesAttachements/Lecture 1.pdf"

const newAttachements=new Attachements({
course:subject._id,
niveau:niveau._id,
content:attachementPath,
date:new Date(),

})
await newAttachements.save()
console.log("saved",newAttachements)

}


async function addGroup(){
    const newGroup=new Group({
        groupNumber:"3",
        studentNumber:30,
        niveau:new mongoose.Types.ObjectId("660affdfd41ab187cc082659")
    })
  await  newGroup.save()
    console.log("saved")
}

async function addStudent(groupe){
const student={
    firstname: "John",
    secondName: "Doe",
    idNumber: "123456789",
    registrationNumber: "20240001",
    birthDate: "1995-10-15",
    picture: "https://example.com/john-doe.jpg",
    email: "john.doe@example.com",
    address: "123 Main Street, City, Country",
    number: "+1234567890",
    nationality: "US",
    password: "$2a$10$u2TvtqHp6J8yUv/UZnAxj.lhzgRuyJshwJgC5wifFWNAsF8bZP4zi",
    group:new mongoose.Types.ObjectId(groupe)
  }

  const newStudent=new Student(student);
  await newStudent.save();
  console.log("saved")
}

// addSubjects()
// addFields()
// addNiveau("ING-GL","A2")
// addSubjectNiveau("ING-GL-A2")
addAttachements("7309","./static/coursesAttachements/2222TP Empoisonnement ARP.pdf","ING-GL-A2")
// addGroup()
// addStudent("660d3cec7c8ae9453bfe2d60")