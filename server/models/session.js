import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  start: { type: Date, required: true },
  end: { type: Date, required: true },
  subject: { type: mongoose.Schema.Types.ObjectId, ref: "Subject" },
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher" },
  group: [{ type: mongoose.Schema.Types.ObjectId, ref: "Group" }],
  classroom: { type: mongoose.Schema.Types.ObjectId, ref: "Classroom" },
});

const Session=mongoose.model("Session",sessionSchema,"Session");
export default Session;