// const uuid = require("uuid");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

const app = express();
mongoose
  .connect(
    "mongodb+srv://serin:serin0837@cluster0.ai95b.mongodb.net/wordList?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(console.log("mongo connect"));
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// const words = [];

// no cors // local host
app.options("/word", (req, res) => {
  res.setHeader("accept", "application/json");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-allow-methods", "*");
  res.setHeader("access-control-allow-headers", "*");
  res.status(200).end();
});

app.use("/api", require("./routes/api"));

app.listen(process.env.PORT || 5000, () => {
  console.log("listening");
});
