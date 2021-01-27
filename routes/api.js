const express = require("express");
const router = express.Router();
const Word = require("../models/word");
const Language = require("../models/language")

//get every words
router.get("/words", function (req, res) {
  Word.find({}).then(function (word) {
    res.send(word);
  });
});
//get word with user id
router.get("/words/userId/:userId", function(req,res){
  Word.find({userId:req.params.userId}).then(function (word) {
    res.send(word);
  });
})

// add a word to db 
router.post("/words", function (req, res) {
  //new instance of County object
  Word.create(req.body).then(function (word) {
    res.send(word);
  });
});
//delete word by id 
router.delete("/words/:id", function (req, res) {
  Word.findByIdAndRemove({ _id: req.params.id }).then(function (word) {
    res.send(word);
  });
});
//update word by id
router.put("/words/:id", function (req, res, next) {
  Word.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(
    function (word) {
      res.send(word);
    }
  );
});

//get every language
router.get("/languages", function (req, res) {
  Language.find({}).then(function (language) {
    res.send(language);
  });
});

// add a language to db -> working!!!!
router.post("/languages", function (req, res) {
  //new instance of County object
  Language.create(req.body).then(function (language) {
    res.send(language);
  }).catch((err)=>console.log(err));
});
//delete a language to db
router.delete("/languages/:id", function (req, res) {
  Language.findByIdAndRemove({ _id: req.params.id }).then(function (language) {
    res.send(language);
  });
});

module.exports = router;
