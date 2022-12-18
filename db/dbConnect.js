// external imports
// const mongoose = require("mongoose");
// require('dotenv').config()
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
dotenv.config()

export default async function dbConnect() {
  // use mongoose to connect this app to our database on mongoDB using the DB_URL (connection string)
  mongoose
    .connect(
        process.env.DB_URL,
        // 'mongodb+srv://jsswp2004:krat20Miko!@cluster0.wponyb4.mongodb.net/employees?retryWrites=true&w=majority',
      {
        //   these are options to ensure that the connection is done properly
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }
    )
    .then(() => {
      console.log("Successfully connected to Database!");
      console.log("Database Name: ", mongoose.connection.name);
      // console.log(process.env.DB_URL);
    })
    .catch((error) => {
      console.log("Unable to connect to Database!");
      console.error(error);
    });
}

// module.exports = dbConnect;