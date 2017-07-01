const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UploadSchema = new Schema({
  filename: {
    type: String,
    date: Date,
    index: {
      unique: true
    }
  }
});

module.exports = mongoose.model('uploads', UploadSchema);
