import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  secondName: {
    type: String,
  },
  role: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
  },
  email: {
    type: String,
    default: null,
    unique: true,
    validate: [validator.isEmail, "Invalid Email Address"],
  },
  address: {
    type: String,
  },
  number: {
    type: String,
  },
});

const Admin=mongoose.model("admin",adminSchema,"admin");
export default Admin;