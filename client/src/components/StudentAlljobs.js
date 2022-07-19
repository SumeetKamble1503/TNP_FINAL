import React, { Fragment, useEffect } from 'react';
import '../CSS/dashboard.css';
import Card from 'react-bootstrap/Card';
import DashboardCard from './DashboardCard';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../actions/profile';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Container, Col, Row, Form } from "react-bootstrap";

import { StudentAlljobsCard } from './StudentAlljobsCard.js';
import axios from 'axios';
import { AllJobs} from '../actions/alljobs';

export const StudentAlljobs = ({ AllJobs , alljobs:{jobs}}) => {
    useEffect(() => {
        AllJobs();
        // console.log({jobs});
      }, [AllJobs]);
    
var index = 1;
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
              <h1 style={{fontWeight:"bold",color:'#198754',textAlign:'center'}}> All Jobs</h1>
              <br />
            <Container style={{padding:"0px",margin:"0px"}}>
              
              <div
                class='row p-2'
                style={{
                  alignitems: 'center',
                  justifycontent: 'center',
                  backgroundColor: '#198754',
                //   backgroundColor:'#fe6601',
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
                <div class='col-1'  style={{ textAlign:"center"}}>#</div>
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
                    <StudentAlljobsCard index={index++} item={item} key={item._id} />
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

export default connect(mapStateToProps, { AllJobs })(StudentAlljobs);
