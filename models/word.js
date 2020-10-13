const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WordSchema = new Schema({
  languagename:{
    type:String,
  },
  name: {
    type: String,
  },
  meaning: {
    type: String,
  },
  note: {
    type: String,
  },
});

const Word = mongoose.model("word", WordSchema);

module.exports = Word;
