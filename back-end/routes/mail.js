const express = require("express");
const router = express.Router();

const mailControllers = require("../controllers/mail");
const auth = require("../middleware/auth");

router.get("/sendmail", auth, mailControllers.sendMail);

module.exports = router;
