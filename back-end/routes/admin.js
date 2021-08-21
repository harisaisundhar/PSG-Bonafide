const express = require("express");
const router = express.Router();
const adminControllers = require('../controllers/admin')
const auth = require("../middleware/auth");

router.post("/approve", auth, adminControllers.approve)

module.exports = router