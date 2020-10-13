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

// add a word to db -> working!!!!
router.post("/words", function (req, res) {
  //new instance of County object
  Word.create(req.body).then(function (word) {
    res.send(word);
  });
});
//delete word by id //working
router.delete("/words/:id", function (req, res) {
  Word.findByIdAndRemove({ _id: req.params.id }).then(function (word) {
    res.send(word);
  });
});
//update word by id//working
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
  });
});
//delete a language to db
router.delete("/languages/:id", function (req, res) {
  Language.findByIdAndRemove({ _id: req.params.id }).then(function (language) {
    res.send(language);
  });
});


//get every word
// app.get("/word", (req, res) => {
//   console.log("received");
//   res.contentType("application/json");
//   res.setHeader("access-control-allow-origin", "*");
//   res.status(200).send(words);
// });

// //post new word
// app.post("/word", (req, res) => {
//   console.log(req.body);
//   const wordToAdd = {
//     id: uuid.v4(),
//     name: req.body.name,
//     meaning: req.body.meaning,
//     note: req.body.note,
//     remember: false,
//   };
//   words.push(wordToAdd);
//   res.contentType("application/json");
//   res.setHeader("access-control-allow-origin", "*");
//   res.status(201).send(wordToAdd);
// });
// // delete request
// app.delete("/word", (req, res) => {
//   console.log("id");
//   res.contentType("application/json");
//   res.setHeader("access-control-allow-origin", "*");
//   res.status(204);

//   words.filter((word) => {
//     return word.id !== req.body.id;
//   });
// });

// words: currentState.words.filter(
module.exports = router;
