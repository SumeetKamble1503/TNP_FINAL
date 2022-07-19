const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

const ActiveJob = require('../../models/Activejob');
const Profile = require('../../models/Profile');
const Jobs = require('../../models/Jobs');
const auth = require('../../middleware/auth');
const req = require('express/lib/request');
const res = require('express/lib/response');
const { response } = require('express');

//@route   GET api/activejobs
//@desc    Get all Active Jobs
//@access  Private
router.get('/', auth, async (req, res) => {
  try {
    const activejobs = await ActiveJob.find().sort({ date: -1 });
    res.json(activejobs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route   DELETE api/activejobs
//@desc    Delete a Active Job
//@access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const activejob = await ActiveJob.findById(req.params.id);

    if (!activejob) {
      return res.status(404).json({ msg: 'ActiveJob not found' });
    }

    await activejob.remove();
    res.json({ msg: 'ActiveJob removed ' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route   PUT api/activejobs/response/:id
//@desc    Respond to a Active Job
//@access  Private
router.put('/response/:id', auth, async (req, res) => {
  try {
    const job = await ActiveJob.findById(req.params.id);
    const job2 = await Jobs.findById(req.params.id);
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      'user',
      ['admno']
    );

    // (job.responses = []),
    //profile.user.admno

    // console.log(profile);
    // console.log(job);

    //check if job already responded by user
    // if (
    //   job.responses.filter(
    //     (response) => response.user.id.toString() === req.user.id
    //   ).length > 0
    // ) {
    //   return res.status(400).json({ msg: 'Already responded to this job' });
    // }

    //add reponse
    job.responses.unshift({
      user: req.user.id,
      name: profile.name,
      admno: profile.user.admno,
      email: profile.email,
      phoneno: profile.phoneno,
      dept: profile.dept,
      passout: profile.passout,
      percentage10: profile.percentage10,
      percentage12: profile.percentage12,
      gender: profile.gender,
      dob: profile.dob,
      hometown: profile.hometown,
      currentresiding: profile.currentresiding,
      sem1: profile.sem1,
      sem2: profile.sem2,
      sem3: profile.sem3,
      sem4: profile.sem4,
      sem5: profile.sem5,
      sem6: profile.sem6,
      sem7: profile.sem7,
      sem8: profile.sem8,
      activebacklog: profile.activebacklog,
      resumelink: profile.resumelink,
    });

    //add response to Job in alljobs
    job2.responses.unshift({
      user: req.user.id,
      name: profile.name,
      admno: profile.user.admno,
      email: profile.email,
      phoneno: profile.phoneno,
      dept: profile.dept,
      passout: profile.passout,
      percentage10: profile.percentage10,
      percentage12: profile.percentage12,
      gender: profile.gender,
      dob: profile.dob,
      hometown: profile.hometown,
      currentresiding: profile.currentresiding,
      sem1: profile.sem1,
      sem2: profile.sem2,
      sem3: profile.sem3,
      sem4: profile.sem4,
      sem5: profile.sem5,
      sem6: profile.sem6,
      sem7: profile.sem7,
      sem8: profile.sem8,
      activebacklog: profile.activebacklog,
      resumelink: profile.resumelink,
    });

    await job.save();
    //res.json({ msg: 'Job response added' });

    res.json(job.responses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route   GET api/activejobs/response/:id
//@desc    Get Responses to a Active Job
//@access  Private
router.get('/response/:id', auth, async (req, res) => {
  try {
    const job = await ActiveJob.findById(req.params.id);

    res.json(job.responses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
