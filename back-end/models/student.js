const mongoose = require("mongoose");
const bonafideSchema = require('./bonafide');

const studentSchema = new mongoose.Schema({
  rollNo: { type: String, required: true, unique: true, immutable: true },
  firstName: { type: String, immutable: true },
  lastName: { type: String, immutable: true },
  role: { type: String, immutable: true },
  email: { type: String, immutable: true },
  classId: { type: String, immutable: false },
  bonafides: [bonafideSchema.schema] 
});

module.exports = mongoose.model("StudentModel", studentSchema);
