const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
const auth = require("./middleware/auth");
const loginController = require("./controllers/login");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("combined"));

mongoose.connect(process.env.DBURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to database successfully!");
});

app.post("/api/login", loginController.nucleus_auth);

app.get("/api", auth, (req, res) => {
  res.status(200).send("Hello! Welcome to Bonafide API!");
});

( function() {
  try {
    app.listen(process.env.PORT, () => {
      console.log(`Node app listening at http://localhost:${process.env.PORT}/api`)
    })
  } catch (e) {
    console.error(e)
  }
}());

