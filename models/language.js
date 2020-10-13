const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const languageSchema = new Schema({
  languagename:{
    type:String,
    required:true,
    unique:true,
  },
});

const Language = mongoose.model("language", languageSchema);

module.exports = Language;
