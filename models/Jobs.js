const mongoose = require('mongoose');

const JobsSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  jd: {
    type: String,
  },
  branches: {
    type: [String],
  },
  stipend: {
    type: String,
  },
  cgpa: {
    type: String,
  },
  responses: [
    //add the fields of students here
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
      },

      name: {
        type: String,
      },

      admno: {
        type: String,
      },

      email: {
        type: String,
      },

      phoneno: {
        type: String,
      },

      gender: {
        type: String,
      },

      dept: {
        type: String,
      },

      passout: {
        type: String,
      },

      percentage10: {
        type: String,
      },

      percentage12: {
        type: String,
      },

      dob: {
        type: String,
      },

      hometown: {
        type: String,
      },

      currentresiding: {
        type: String,
      },

      sem1: {
        type: String,
      },

      sem2: {
        type: String,
      },

      sem3: {
        type: String,
      },

      sem4: {
        type: String,
      },

      sem5: {
        type: String,
      },

      sem6: {
        type: String,
      },

      sem7: {
        type: String,
      },

      sem8: {
        type: String,
      },

      activebacklog: {
        type: String,
      },

      resumelink: {
        type: String,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Jobs = mongoose.model('jobs', JobsSchema);
