  
const express = require("express");
const router = express.Router();
const studentsControllers = require('../controllers/student')
const auth = require("../middleware/auth");

router.post("/apply", auth, studentsControllers.apply)
router.get("/:rollNo", auth, studentsControllers.getBonafide)

module.exports = router