const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const auth = require("./middleware/auth");
const loginController = require("./controllers/login");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/bonafide", {
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

app.listen(4000, () => {
  console.log(`Node app listening at http://localhost:4000`);
});
