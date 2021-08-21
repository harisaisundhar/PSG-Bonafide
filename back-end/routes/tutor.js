const express = require("express");
const router = express.Router();
const tutorsControllers = require('../controllers/tutor')
const auth = require("../middleware/auth");

router.post("/approve", auth, tutorsControllers.approve)

module.exports = router