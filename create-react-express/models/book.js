const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const googlebook = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: {type: String},
  image: { type: Image},
  link: {type: String} 
});

const Book = mongoose.model("Book", googlebook);

module.exports = Book;