const express = require("express");
const cors = require("cors")
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

app.use(cors());
app.use(express.json());


app.use("/api", require("./routes/api"));

app.listen(process.env.PORT || 5000, () => {
  console.log("listening");
});
