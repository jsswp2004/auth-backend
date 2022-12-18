// const mongoose = require("mongoose");
import mongoose from 'mongoose'

// user schema
const UserSchema = new mongoose.Schema({
  //first name field
  firstName: {
    type: String,
    required: [true, "Please provide a First Name!"],
    unique: false,
  },
  //last name field
  lastName: {
    type: String,
    required: [true, "Please provide a Last Name!"],
    unique: false,
  },  
  // email field
  email: {
    type: String,
    required: [true, "Please provide an Email!"],
    unique: [true, "Email Exist"],
  },
  //role field
  role: {
    type: String,
    required: [true, "Please provide a Role!"],
    unique: false,
  },

  //   password field
  password: {
    type: String,
    required: [true, "Please provide a password!"],
    unique: false,
  },
});

// export UserSchema
// module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);
export default mongoose.models.Users || mongoose.model("Users", UserSchema);
