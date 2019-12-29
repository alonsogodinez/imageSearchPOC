const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  key: {
    type: 'String',
    required: true,
    trim: true,
    unique: true
  },
  text: {
    type: 'String',
    required: true,
    trim: true,
  }
});



module.exports = mongoose.model('Image', imageSchema);