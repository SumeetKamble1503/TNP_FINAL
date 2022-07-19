const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneno: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  dept: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  hometown: {
    type: String,
    required: true,
  },
  currentresiding: {
    type: String,
    required: true,
  },
  passout: {
    type: String,
    required: true,
  },
  percentage10: {
    type: String,
    required: true,
  },
  percentage12: {
    type: String,
    required: true,
  },
  sem1: {
    type: String,
    required: true,
  },
  sem2: {
    type: String,
    required: true,
  },
  sem3: {
    type: String,
    required: true,
  },
  sem4: {
    type: String,
    required: true,
  },
  sem5: {
    type: String,
    required: true,
  },
  sem6: {
    type: String,
    required: true,
  },
  sem7: {
    type: String,
    required: true,
  },
  sem8: {
    type: String,
    required: true,
  },
  activebacklog: {
    type: String,
    required: true,
  },
  resumelink: {
    type: String,
    required: true,
  },
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
