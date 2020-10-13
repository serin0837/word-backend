const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const languageSchema = new Schema({
  language:{
    type:String,
  },
});

const Language = mongoose.model("language", languageSchema);

module.exports = Language;
