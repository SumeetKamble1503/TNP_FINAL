import React, { Fragment, useEffect } from 'react';
import '../CSS/dashboard.css';
import Card from 'react-bootstrap/Card';
import StudentDashboardCard from './StudentDashboardCard';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../actions/profile';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Container, Col, Row, Form } from "react-bootstrap";

import { PrintCard } from './AdminAlljobsCard.js';
import { Activejobs } from '../actions/activejobs';

export const StudentDashboard = ({ Activejobs, activejob:{actjobs}}) => {
    useEffect(() => {
        Activejobs();
        console.log({actjobs});

      }, [Activejobs]);
    
      
  return (
    <>
    <Container 
    style={{
      marginTop:'60px',
      // marginLeft:'10px',
      // marginRight:'10px',
      alignitems: 'center',
      justifycontent: 'center'
    }}
      >
<Fragment>

      <Container 
      style={{margin:'0px',
      alignitems: 'center',
      justifycontent: 'center',
      textAlign:'center',
      
    }}
      
      >
      {/* {
      profile === null?(
        //has profile
      <Fragment>{console.log('not null')} </Fragment>
      ):(<Fragment>
        <p><b>You have not yet setup a profile, please add some information.</b></p>
        <Link to={'/myprofile'} type="button" className='btn btn-dark rounded-2' style={{borderRadius:"10px"}}>
          Create Profile
        </Link>
      </Fragment>
      )
      } */}
      </Container>
      <Container style={{margin:"0px"}}>
        <br />
        <br />
        <h2 style={{ fontWeight:"bold",color: '#198754', paddingLeft: '20px' , textAlign:"center",marginBottom:"20px"}}> Your DashBoard</h2>
        <div
          className='row p-1'
          style={{
            // backgroundColor: "#198754",
            color: 'white',
            fontWeight: 'bold',
            fontFamily: 'times new roman',
            fontSize: '125%',
            textAlign: 'center',
            margin: '0px',
          }}
        >
          {actjobs.map((item) => {
            return (
              <>
                <StudentDashboardCard item={item} key={item.company} />
                {/* {console.log(item)} */}
              </>
            );
          })}
        </div>
      </Container>
    </Fragment>
    </Container>
    </>
    
  );
};

Activejobs.propTypes = {
  Activejobs: PropTypes.func.isRequired,
  activejob:  PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  activejob: state.activejob,
});

export default connect(mapStateToProps, { Activejobs })(StudentDashboard);


