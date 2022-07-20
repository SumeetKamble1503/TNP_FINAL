const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

const Jobs = require('../../models/Jobs');
const ActiveJob = require('../../models/Activejob');
const auth = require('../../middleware/auth');
const req = require('express/lib/request');
const res = require('express/lib/response');

//@route   POST api/jobs
//@desc    Create Job
//@access  Private
router.post(
  '/',
  [auth, [check('company', 'Comapany name is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // destructure the request
    const { company, branches, jd, cgpa, stipend } = req.body;

    //Build jobs object
    const postFields = {};

    if (company) postFields.company = company;
    if (jd) postFields.jd = jd;
    if (cgpa) postFields.cgpa = cgpa;
    if (stipend) postFields.stipend = stipend;

    if (branches) {
      postFields.branches = branches.split(',').map((branch) => branch.trim());
    }

    try {
      const activejob = new ActiveJob(postFields);
      await activejob.save();

      res.json(activejob);

      postFields.jobid = activejob._id;
      const job = new Jobs(postFields);
      await job.save();
      // console.log(job._id);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

//@route   GET api/jobs
//@desc    Get all Job
//@access  Private
router.get('/', auth, async (req, res) => {
  try {
    const alljobs = await Jobs.find().sort({ date: -1 });
    res.json(alljobs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route   GET api/jobs/response/:id  [jobid]
//@desc    Get Responses to a Inactive Job
//@access  Private
router.get('/response/alljobs/:id', auth, async (req, res) => {
  try {
    const job = await Jobs.findById(req.params.id);

    res.json(job.responses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
