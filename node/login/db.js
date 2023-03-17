const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(
  MONGO_URL
);
console.log("Mongo is connected");
