const mongoose = require("mongoose");
require("dotenv").config();

const connectDb = () => {
  console.log("Connected");
  mongoose.set("strictQuery", true);
  return mongoose.connect(process.env.MONGO_URL);
};

module.exports = connectDb;
