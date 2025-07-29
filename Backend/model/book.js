// const mongoose = require("mongoose");

import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  image: String,
  title: String,
});

const book = new mongoose.model("Book", Schema);
export default book;
