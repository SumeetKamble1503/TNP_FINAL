const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

const Profile = require('../../models/Profile');
const User = require('../../models/User');
const auth = require('../../middleware/auth');

//@route   GET api/profile/me
//@desc    Get current user's profile
//@access  Private
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this User' });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route   POST api/profile
//@desc    Create or Update profile
//@access  Private
router.post(
  '/',
  [
    auth,
    [
      check('name', 'name is required').not().isEmpty(),
      check('email', 'Valid email is required').isEmail(),
      check('gender', 'Gender is required').not().isEmpty(),
      check('passout', 'Passout year is required').not().isEmpty(),
      check('phoneno', 'Phone number is required').not().isEmpty(),
      check('dept', 'Department is required').not().isEmpty(),
      check('dob', 'Date of Birth is required').not().isEmpty(),
      check('percentage10', '10th Percentage is required').not().isEmpty(),
      check('percentage12', '12th Percentage is required').not().isEmpty(),
      check('sem1', 'Sem 1 CGPA is required').not().isEmpty(),
      check('sem2', 'Sem 2 CGPA is required').not().isEmpty(),
      check('sem3', 'Sem 3 CGPA is required').not().isEmpty(),
      check('sem4', 'Sem 4 CGPA is required').not().isEmpty(),
      check('sem5', 'Sem 5 CGPA is required').not().isEmpty(),
      check('sem6', 'Sem 6 CGPA is required').not().isEmpty(),
      check('sem7', 'Sem 7 CGPA is required').not().isEmpty(),
      check('sem8', 'Sem 8 CGPA is required').not().isEmpty(),

      check('hometown', 'Hometown is required').not().isEmpty(),
      check('currentresiding', 'Current Residing City is required').not().isEmpty(),
      check('resumelink', 'Resume Link is required').not().isEmpty(),
      check('activebacklog', 'Active Backlog count is required').not().isEmpty(),

    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // destructure the request
    const { name, email, gender, passout, phoneno, percentage10, dept ,percentage12 ,dob,
      hometown,
      currentresiding, 
      sem1,
      sem2,
      sem3,
      sem4,
      sem5,
      sem6,
      sem7,
      sem8,
      activebacklog,
      resumelink} =
      req.body;

    //Build profile object
    const profileFields = {};
    profileFields.user = req.user.id;

    if (name) profileFields.name = name;
    if (email) profileFields.email = email;
    if (gender) profileFields.gender = gender;
    if (passout) profileFields.passout = passout;
    if (phoneno) profileFields.phoneno = phoneno;
    if (percentage10) profileFields.percentage10 = percentage10;
    if (percentage12) profileFields.percentage12 = percentage12;
    if (dept) profileFields.dept = dept;
    if (sem1) profileFields.sem1 = sem1;
    if (sem2) profileFields.sem2 = sem2;
    if (sem3) profileFields.sem3 = sem3;
    if (sem4) profileFields.sem4 = sem4;
    if (sem5) profileFields.sem5 = sem5;
    if (sem6) profileFields.sem6 = sem6;
    if (sem7) profileFields.sem7 = sem7;
    if (sem8) profileFields.sem8 = sem8;
    if (dob) profileFields.dob = dob;
    if (hometown) profileFields.hometown = hometown;
    if (currentresiding) profileFields.currentresiding = currentresiding;
    if (activebacklog) profileFields.activebacklog = activebacklog;
    if (resumelink) profileFields.resumelink = resumelink;

    try {
      let profile = await Profile.findOne({ user: req.user.id });

      if (profile) {
        //Update if found
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );
        console.log('updating profile');
        console.log(profile);
        return res.json(profile);
      }

      //Create if not there
      profile = new Profile(profileFields);

      await profile.save();
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
