import React, { Fragment, useEffect } from 'react';
import '../CSS/dashboard.css';
import Card from 'react-bootstrap/Card';
import DashboardCard from './DashboardCard';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../actions/profile';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Container, Col, Row, Form } from "react-bootstrap";

import { AdminAlljobsCard } from './AdminAlljobsCard.js';
import axios from 'axios';
import { AllJobs} from '../actions/alljobs';

export const AdminAlljobs = ({ AllJobs , alljobs:{jobs}}) => {
    useEffect(() => {
        AllJobs();
        // console.log({jobs});
      }, [AllJobs]);
    
      
  return (
    <>  
        <html>
        <head>
          <meta charset='UTF-8' />
          <meta http-equiv='X-UA-Compatible' content='IE=edge' />
          <meta name='viewport' content='width= , initial-scale=1.0' />
          <title>Print JS</title>
        </head>
        <body>
          <div
            style={{
              alignitems: 'center',
              justifycontent: 'center',
              marginTop: '10px',
              padding:"10px",
              
            }}
          >
            <div className='container' style={{padding:"0px",marginTop: '0px',}}>
              <h1 style={{fontWeight:"bold",color:'#0199fe',textAlign:'center'}}>Admin All Jobs</h1>
              <br />
            <Container style={{padding:"0px",margin:"0px"}}>
              
              <div
                class='row p-2'
                style={{
                  alignitems: 'center',
                  justifycontent: 'center',
                  // backgroundColor: '#198754',
                  backgroundColor:'#fe6601',
                  color: 'white',
                  fontWeight: 'bold',
                  fontFamily: 'times new roman',
                  fontSize: '150%',
                  fontSize: '3.5vmin',
                  textAlign: 'left',
                  
                  
                }}
              >
                {/* <div class='col-4 align-self-center'>
                <div
                  class='row p-2'
                  style={{
                    padding: "2px",
                    textAlign: 'center',
                  
                  }}>
                  <div class='col-4 align-self-center' style={{textAlign: 'center'}}>
                    #
                  </div>
                  <div class='col-8 align-self-center' style={{textAlign: 'center'}}>ADM Num</div>
                </div>
                </div> */}
                <div class='col-1'  style={{ textAlign:"center"}}> <a href='#' style={{ color:'white'}}><svg xmlns="http://www.w3.org/2000/svg" 
                  width="3.5vmin" 
                  height="3.5vmin" 
                  
                  fill="currentColor" 
                  className="bi bi-printer" 
                  viewBox="0 0 16 16">
                    <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
                    <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"/>
</svg></a></div>
                <div class='col-2'>Company Name</div>
                <div class='col-2'>Role</div>
                <div class='col-2'>Branches</div>
                <div class='col-2'>CTC</div>
                <div class='col-2'>Eligibility</div>
                {/* <div class='col-2 ' >Selections</div> */}
                {/* <div class='col-4 align-self-center' >company</div> */}
                {/* <div class='col-2 align-self-center'>Gender</div> */}
               
                {/* <div class='col-3 align-self-center'>Selections </div> */}
               {/* {console.log(res)} */}
              </div>
              {jobs.map((item) => {
                return (
                <>
                    <AdminAlljobsCard item={item} key={item._id} />
                    {/* {console.log(item.Num)} */}
                </>
                );
            })}
               
            </Container>
            </div>
          </div>
        </body>
      </html>
    </>  
    
  );
};

AllJobs.propTypes = {
  AllJobs: PropTypes.func.isRequired,
  alljobs:  PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  alljobs: state.alljobs,
  
});

export default connect(mapStateToProps, { AllJobs })(AdminAlljobs);
