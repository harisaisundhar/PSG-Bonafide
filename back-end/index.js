const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const mail = require("./controllers/mail")

const auth = require("./middleware/auth");
const studentRouter = require("./routes/student")
const tutorRouter = require("./routes/tutor")
const adminRouter = require("./routes/admin")
const loginController = require("./controllers/login");
require("dotenv").config();

const app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("combined"));
app.use(cookieParser());

mongoose.connect(process.env.DBURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to database successfully!");
});

app.use('/api/student', studentRouter);
app.use('/api/tutor', tutorRouter);
app.use('/api/admin', adminRouter);
app.post("/api/login", loginController.nucleus_auth);
app.get("/api/sendmail", mail.sendMail)

app.get("/api", auth, (req, res) => {
  res.status(200).send("Hello! Welcome to Bonafide API!");
});

(function () {
  try {
    app.listen(process.env.PORT, () => {
      console.log(
        `Node app listening at http://localhost:${process.env.PORT}/api`
      );
    });
  } catch (e) {
    console.error(e);
  }
})();
