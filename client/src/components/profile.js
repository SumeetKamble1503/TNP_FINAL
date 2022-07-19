import React, { Fragment, useState, useEffect } from 'react';
import '../CSS/profile.css';
import '../IMG/tnplogo.png';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createProfile, getCurrentProfile } from '../actions/profile';
var data={};
var count = 0;
const Profile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
}) => {
  useEffect(() => {
    getCurrentProfile();
    // console.log(profile);
    
    if(profile!==null && count === 0){
      data = profile;
      // console.log('data');
      // console.log(data.name);
      count = 1;
      setFormData({
        
        name: (loading || !profile.name) ? ('') : profile.name,
        email: (loading || !profile.email ) ? ('') : profile.email,
        dept: (loading || !profile.dept) ? ('') : profile.dept,
        gender: (loading || !profile.gender) ? ('') : profile.gender,
        passout: (loading || !profile.passout) ? ('') : profile.passout,
        phoneno: (loading || !profile.phoneno) ? ('') : profile.phoneno,
        percentage10: (loading || !profile.percentage10) ? ('') : profile.percentage10,
        percentage12: (loading || !profile.percentage12) ? ('') : profile.percentage12,
        
        sem1: (loading || !profile.sem1) ? ('') : profile.sem1,
        sem2: (loading || !profile.sem2) ? ('') : profile.sem2,
        sem3: (loading || !profile.sem3) ? ('') : profile.sem3,
        sem4: (loading || !profile.sem4) ? ('') : profile.sem4,
        sem5: (loading || !profile.sem5) ? ('') : profile.sem5,
        sem6: (loading || !profile.sem6) ? ('') : profile.sem6,
        sem7: (loading || !profile.sem7) ? ('') : profile.sem7,
        sem8: (loading || !profile.sem8) ? ('') : profile.sem8,
        resumelink: (loading || !profile.resumelink) ? ('') : profile.resumelink,
        activebacklog: (loading || !profile.activebacklog) ? ('') : profile.activebacklog,
        hometown: (loading || !profile.hometown) ? ('') : profile.hometown,
        currentresiding: (loading || !profile.currentresiding) ? ('') : profile.currentresiding,
        dob: (loading || !profile.dob) ? ('') : profile.dob,
  
        
      });
    }
    
  
      
    
   
  }, [loading, getCurrentProfile, profile]);
  
  

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dept: '',
    gender: '',
    passout: '',
    phoneno: '',
    dob: '',
    hometown: '',
    currentresiding: '',
    percentage10: '',
    percentage12:'',
    sem1: '',
    sem2: '',
    sem3: '',
    sem4: '',
    sem5: '',
    sem6: '',
    sem7: '',
    sem8: '',
    activebacklog: '',
    resumelink: '',

  });

  const { name, email, dept, gender, passout, phoneno, percentage10 ,percentage12 ,dob,
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
  resumelink} = formData;

  var editVar = false;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    if (!loading && profile !== null) {
      editVar = true;
      console.log('Changing editVar here');
    }
    e.preventDefault();
    console.log(editVar);
    console.log('createProfile callling');
    createProfile(formData, editVar);
  };

  return (
    
    <Fragment>
      <form onSubmit={(e) => onSubmit(e)}>
        <h1>Personal Information</h1>
        <div data-v-10d4b26c='' className='field'>
          <label data-v-10d4b26c=''> Name </label>
          <div data-v-10d4b26c='' className='control'>
            <input
              data-v-10d4b26c=''
              type='text'
              name='name'
              required='required'
              className='input'
              
              value={name}
              onChange={(e) => onChange(e)}
            />
          </div>
        </div>
        <div data-v-10d4b26c='' className='field'>
          <label data-v-10d4b26c=''> Personal Email </label>
          <div data-v-10d4b26c='' className='control'>
            <input
              data-v-10d4b26c=''
              type='email'
              name='email'
              value={email}
              onChange={(e) => onChange(e)}
              required='required'
              className='input'
            />
          </div>
        </div>
        <div data-v-10d4b26c='' className='field'>
          <label data-v-10d4b26c=''> Phone Number </label>
          <div data-v-10d4b26c='' className='control'>
            <input
              data-v-10d4b26c=''
              type='text'
              name='phoneno'
              value={phoneno}
              onChange={(e) => onChange(e)}
              required='required'
              className='input'
            />
          </div>
        </div>
        {/* <div data-v-10d4b26c='' className='field'>
              <label data-v-10d4b26c=''> Admission Number </label>
              <div data-v-10d4b26c='' className='control'>
                <input
                  data-v-10d4b26c=''
                  type='text'
                  name='roll_no'
                  required='required'
                  readonly='readonly'
                  className='input'
                  placeholder='Prefilled while making usernames & Cannot change'
                />
              </div>
            </div> */}
        <div data-v-10d4b26c='' className='field'>
          <label data-v-10d4b26c=''> Gender </label>
          <div data-v-10d4b26c='' className='control'>
            <p data-v-10d4b26c=''>Your Gender:</p>
            <select
              data-v-10d4b26c=''
              id='gender'
              className='form-control'
              name='gender'
              value={gender}
              onChange={(e) => onChange(e)}
            >
              <option data-v-10d4b26c=''>MALE</option>
              <option data-v-10d4b26c=''>FEMALE</option>
            </select>
          </div>
        </div>
        
        <div data-v-10d4b26c='' className='field'>
          <label data-v-10d4b26c=''> Department </label>
          <div data-v-10d4b26c='' className='control'>
            <input
              data-v-10d4b26c=''
              type='text'
              name='dept'
              value={dept}
              onChange={(e) => onChange(e)}
              className='input'
              placeholder='Prefilled while making usernames & Cannot change'
            />
          </div>
        </div>
        <div data-v-10d4b26c='' className='field'>
              <label data-v-10d4b26c=''> Home Town </label>
              <div data-v-10d4b26c='' className='control'>
                <input
                  data-v-10d4b26c=''
                  type='text'
                  required='required'
                  name='hometown'
                  className='input'
                  value={hometown}
                  onChange={(e) => onChange(e)}
                />
              </div>
            </div>
        <div data-v-10d4b26c='' className='field'>
              <label data-v-10d4b26c=''> Currently Residing </label>
              <div data-v-10d4b26c='' className='control'>
                <input
                  data-v-10d4b26c=''
                  type='text'
                  required='required'
                  name='currentresiding'
                  className='input'
                  value={currentresiding}
                  onChange={(e) => onChange(e)}
                />
              </div>
            </div>
        <div data-v-10d4b26c='' className='field'>
              <label data-v-10d4b26c=''> Date of Birth (dd/mm/yyyy) </label>
              <div data-v-10d4b26c='' className='control'>
                <input
                  data-v-10d4b26c=''
                  type='date'
                  required='required'
                  name='dob'
                  className='input'
                  value={dob}
                  onChange={(e) => onChange(e)}
                />
              </div>
            </div>
        <div data-v-10d4b26c='' className='field'>
          <label data-v-10d4b26c=''> Graduation Year </label>
          <div data-v-10d4b26c='' className='control'>
            <input
              data-v-10d4b26c=''
              type='text'
              required='required'
              name='passout'
              value={passout}
              onChange={(e) => onChange(e)}
              className='input'
            />
          </div>
        </div>
        <div data-v-10d4b26c='' className='field'>
          <label data-v-10d4b26c=''>
            Percentage(10th) (Float field, no need to include %) (you can use
            CGPA or multiply it by 9.5 both are fine)
          </label>
          <div data-v-10d4b26c='' className='control'>
            <input
              data-v-10d4b26c=''
              type='text'
              required='required'
              name='percentage10'
              value={percentage10}
              onChange={(e) => onChange(e)}
              className='input'
            />
          </div>
        </div>
        <div data-v-10d4b26c='' className='field'>
              <label data-v-10d4b26c=''>
                Percentage(12th) (Float field, no need to include %)
              </label>
              <div data-v-10d4b26c='' className='control'>
                <input
                  data-v-10d4b26c=''
                  type='text'
                  required='required'
                  name='percentage12'
                  className='input'
                  value={percentage12}
                  onChange={(e) => onChange(e)}
                />
              </div>
            </div>
        <div data-v-10d4b26c='' className='field'>
              <label data-v-10d4b26c=''> CGPA (Sem1) </label>
              <div data-v-10d4b26c='' className='control'>
                <input
                  data-v-10d4b26c=''
                  type='text'
                  required='required'
                  name='sem1'
                  className='input'
                  value={sem1}
                  onChange={(e) => onChange(e)}
                />
              </div>
            </div>
        <div data-v-10d4b26c='' className='field'>
              <label data-v-10d4b26c=''> CGPA (Sem2) </label>
              <div data-v-10d4b26c='' className='control'>
                <input
                  data-v-10d4b26c=''
                  type='text'
                  required='required'
                  name='sem2'
                  className='input'
                  value= {sem2}
                  onChange={(e) => onChange(e)}
                />
              </div>
            </div>
            <div data-v-10d4b26c='' className='field'>
              <label data-v-10d4b26c=''> CGPA (Sem3) </label>
              <div data-v-10d4b26c='' className='control'>
                <input
                  data-v-10d4b26c=''
                  type='text'
                  required='required'
                  name='sem3'
                  className='input'
                  value = {sem3}
                  onChange={(e) => onChange(e)}
                />
              </div>
            </div>
            <div data-v-10d4b26c='' className='field'>
              <label data-v-10d4b26c=''> CGPA (Sem4) </label>
              <div data-v-10d4b26c='' className='control'>
                <input
                  data-v-10d4b26c=''
                  type='text'
                  required='required'
                  name='sem4'
                  className='input'
                  value = {sem4}
                  onChange={(e) => onChange(e)}
                />
              </div>
            </div>
            <div data-v-10d4b26c='' className='field'>
              <label data-v-10d4b26c=''> CGPA (Sem5) </label>
              <div data-v-10d4b26c='' className='control'>
                <input
                  data-v-10d4b26c=''
                  type='text'
                  name='sem5'
                  className='input'
                  value = {sem5}
                  onChange={(e) => onChange(e)}
                />
              </div>
            </div>
            <div data-v-10d4b26c='' className='field'>
              <label data-v-10d4b26c=''> CGPA (Sem6) </label>
              <div data-v-10d4b26c='' className='control'>
                <input
                  data-v-10d4b26c=''
                  type='text'
                  name='sem6'
                  className='input'
                  value = {sem6}
                  onChange={(e) => onChange(e)}
                />
              </div>
            </div>
            <div data-v-10d4b26c='' className='field'>
              <label data-v-10d4b26c=''> CGPA (Sem7) (Keep 0 if NA) </label>
              <div data-v-10d4b26c='' className='control'>
                <input
                  data-v-10d4b26c=''
                  type='text'
                  name='sem7'
                  className='input'
                  value = {sem7}
                  onChange={(e) => onChange(e)}
                />
              </div>
            </div>
            <div data-v-10d4b26c='' className='field'>
              <label data-v-10d4b26c=''> CGPA (Sem8) (Keep 0 if NA) </label>
              <div data-v-10d4b26c='' className='control'>
                <input
                  data-v-10d4b26c=''
                  type='text'
                  name='sem8'
                  className='input'
                  value = {sem8}
                  onChange={(e) => onChange(e)}
                />
              </div>
            </div>
           
            
           
            <div data-v-10d4b26c='' className='field'>
              <label data-v-10d4b26c=''> Active Backlogs </label>
              <div data-v-10d4b26c='' className='control'>
                <input
                  data-v-10d4b26c=''
                  type='text'
                  name='activebacklog'
                  className='input'
                  value = {activebacklog}
                  onChange={(e) => onChange(e)}
                />
              </div>
            </div>
            <div data-v-10d4b26c='' className='field'>
              <label data-v-10d4b26c=''> Resume Link </label>
              <p data-v-10d4b26c=''>(Don't forget to make the access public)</p>
              <div data-v-10d4b26c='' className='control'>
                <input
                  data-v-10d4b26c=''
                  type='text'
                  required='required'
                  name='resumelink'
                  className='input'
                  value ={resumelink}
                  onChange={(e) => onChange(e)}
                />
              </div>
            </div>
        <div data-v-10d4b26c='' className='field'>
          <div data-v-10d4b26c='' className='control'>
            <button data-v-10d4b26c='' className='button is-success'>
              Create Profile
            </button>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

Profile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  getCurrentProfile: PropTypes.func.isRequired,
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  Profile
);
