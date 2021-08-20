const mongoose = require('mongoose'),
Schema = mongoose.Schema;

const bonafideSchema = new mongoose.Schema({
  id: { type: Number, immutable: true },
  title: { type: String },
  description: { type: String },
  supportingDocumentsLink: { type: String },
  documentLink: { type: String },
  status: { type: String },
  comments: { type: String },
});

module.exports = mongoose.model("BonafideModel", bonafideSchema);