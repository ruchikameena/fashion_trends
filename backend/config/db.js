const mongoose = require("mongoose");

// const colors = require("colors");
// const { response } = require("express");

const connectDB = async (req,res) => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    // res.status(200).send({
    //     message :"database connected",
    // })
    console.log(`Database connected`.bgGreen.white);
  } catch (error) {
    // res.send({
    //     message : 'internal server error ${error}',
    //     success: false,
    //     description : 'database not connected'
    // })
    console.log(`Error: ${error}`.bgRed.white);
  }
}
module.exports = connectDB;