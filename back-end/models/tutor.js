const mongoose = require("mongoose");

const tutorSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true, immutable: true },
  firstName: { type: String, immutable: true },
  lastName: { type: String, immutable: true },
  email: { type: String, immutable: true },
  roles: { type: [String], immutable: true },
  tutorClass: { type: String },
});

module.exports = mongoose.model("TutorModel", tutorSchema);
