const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true
  },

  description: String,

  lessons: {
    type: Number,
    default: 0
  },

  rating: {
    type: Number,
    default: 0
  }

}, {
  timestamps: true
});

module.exports = mongoose.model(
  "Course",
  CourseSchema
);