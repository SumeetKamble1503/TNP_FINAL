import './App.css';
import { Alljobs } from './components/alljobs';
import { Postjobs } from './components/postjob';
import MyNavbar from './components/navbar.js';
import Dashboards from './components/dashboard';
import Profile from './components/profile';
import Login from './components/login';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import React, { Component, Fragment, useEffect } from 'react';
import Alert from './components/Alert';
import PrivateRoute from './routing/PrivateRoute';
// import {AdminAlljobs } from './components/AdminAlljobs';

import { Bootstrapnavbar } from './mynavbar.js';


//Redux
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';
import { loadUSer } from './actions/auth';

//* --------------------Rendering Purpose only ----------------*/
import { PrintResponse } from './components/PrintResponse';
import AdminDashboard from './components/AdminDashboard';
import AdminAlljobs from './components/AdminAlljobs';
import StudentDashboard from './components/StudentDashboard';
import StudentAlljobs from './components/StudentAlljobs';
//* --------------------Rendering Purpose only ----------------*/

function App() {
  var admin = false;
  var isloggedin = false;

  useEffect(() => {
    store.dispatch(loadUSer());
  }, []);

  return (
    <Provider store={store}>
      <Fragment>
        <MyNavbar admin={admin} isloggedin={isloggedin} />
        <Alert />
        <BrowserRouter>
          <Routes>
            {/* {admin ? (
              <>
                <Route path='/' element={<Dashboards />} />
                <Route path='postjob' element={<Postjobs />}></Route>
              </>
            ) : isloggedin ? (
              <>
                <Route path='/' element={<Dashboards />} />
                <Route path='alljobs' element={<Alljobs />} />
                <Route path='myprofile' element={<Profile />} />
                <Route path='history'></Route>
              </>
            ) : (
              <>
                <Route path='/' element={<Login />} />
              </>
            )} */}

            {/* <Route path='/' element={<Dashboards />} /> */}
            <Route path='postjob' element={<Postjobs />}></Route>
            {/* <Route exact path='/' element={<PrivateRoute />} /> */}
            
            
            {/* --------------------Rendering Purpose only ----------------*/}

            {/* Admin Dashboard  */}
            <Route path='/' element={<AdminDashboard/>} />

            {/* Student Dashboard  */}
            {/* <Route path='/' element={<StudentDashboard/>} /> */}
            
            {/* Admin Alljobs  */}
            {/* <Route path='/' element={<AdminAlljobs/>} /> */}

            {/* Student AllJobs  */}
             {/* <Route path='/' element={<StudentAlljobs/>} /> */}


            {/* Print Response (Just for Visuals)  */}
            {/* <Route path='/' element={<PrintResponse/>} /> */}

            {/* --------------------Rendering Purpose only ----------------*/}

            <Route path='alljobs' element={<Alljobs />} />
            <Route path='myprofile' element={<Profile />} />
            <Route path='history'></Route>

            <Route path='/login' element={<Login />} />
            {/* <Route path='/redirect' element={<Navigate to='/login' />} /> */}
          </Routes>
        </BrowserRouter>
      </Fragment>
    </Provider>
  );
}

export default App;
