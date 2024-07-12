const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  point: {
    type: Number,
    required: true,
    min: 0,
    max: 10,
    default: 0,
  }
})

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;