import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import '../CSS/loginstyle.css';
import { setAlert } from '../actions/alert';
import PropTypes from 'prop-types';
import { login } from '../actions/auth';
import { useNavigate, Navigate } from 'react-router-dom';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    admno: '',
    password: '',
  });

  const { admno, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(admno, password);
  };

  //Redirect if logged in

  //navigation
  const navigate = useNavigate();
  if (isAuthenticated) {
    // {
    //   isAuthenticated && <Navigate to='/alljobs' replace={true} />;
    // }
    return <Navigate to='/' replace={true} />;
  }

  return (
    <>
      <html>
        <head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
          <link
            href='https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300&display=swap'
            rel='stylesheet'
          />
          <link href='../CSS/loginstyle.css' rel='stylesheet' />
          <title>Login Form TNP</title>
        </head>
        <body>
          <div className='main-container1'>
            <div className='container1'>
              <div className='formcontainer'>
                <form className='form1' onSubmit={(e) => onSubmit(e)}>
                  <h1>Login</h1>
                  <br />

                  <div className='input1'>
                    <input
                      type='text'
                      name='admno'
                      id='username'
                      value={admno}
                      onChange={(e) => onChange(e)}
                      required
                      title='Please enter your Username here'
                    />
                    <label>Username</label>
                  </div>

                  <div className='input1'>
                    <input
                      type='password'
                      name='password'
                      id='password'
                      value={password}
                      onChange={(e) => onChange(e)}
                      required
                      title='Please enter your Password here'
                    />
                    <label>Password</label>
                  </div>

                  <input type='submit' value='Login' className='login-btn1' />
                  <a href='#'>Forgot Password?</a>
                </form>
              </div>
            </div>
          </div>
        </body>
      </html>
    </>
  );
};

Login.prototype = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
