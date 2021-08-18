const mongoose = require("mongoose");

const bonafideSchema = new mongoose.Schema({
  id: { type: Number, immutable: true },
  title: { type: String },
  description: { type: String },
  supportingDocumentsLink: { type: String },
  documentLink: { type: String },
  status: { type: String },
  comments: { type: String },
});

const studentSchema = new mongoose.Schema({
  rollNo: { type: String, required: true, unique: true, immutable: true },
  firstName: { type: String, immutable: true },
  lastName: { type: String, immutable: true },
  role: { type: String, immutable: true },
  email: { type: String, immutable: true },
  classId: { type: String, immutable: false },
  bonafides: { type: [bonafideSchema] },
});

module.exports = mongoose.model("StudentModel", studentSchema);
