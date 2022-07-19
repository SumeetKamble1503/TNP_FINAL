import React, { Fragment, useEffect } from 'react';
import '../CSS/dashboard.css';
import Card from 'react-bootstrap/Card';
import DashboardCard from './DashboardCard';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../actions/profile';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Dashboards = ({ getCurrentProfile, auth, profile }) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  const company = [
    {
      Num: 1,
      CompanyName: 'Google',
      Role: 'SDE',
      Type: 'Full Time',
      CTC: '20',
      Eligibility: 'CGPA > 7.5',
      Jd: 'CASDcsdlnslkdvnsldvnlsdkvnalskdnvslkdvnalskdvnslkvnsldvknsdlvknasdlkvnsldvknsldvknslvkns',
      Deadline: '2021-05-05',
      Status: 'Open',
      Action: 'Apply',
    },
    {
      Num: 2,
      CompanyName: 'Microsoft',
      Role: 'SDE',
      Type: 'Full Time',
      CTC: '30',
      Eligibility: 'CGPA > 8.5',
      Jd: 'CASDcsdlnslkdvnsldvnlsdkvnalskdnvslkdvnalskdvnslkvnsldvknsdlvknasdlkvnsldvknsldvknslvkns',
      Deadline: '2021-05-05',
      Status: 'Open',
      Action: 'Apply',
    },
    {
      Num: 3,
      CompanyName: 'Nutanix',
      Role: 'SDE',
      Type: 'Full Time',
      CTC: '25',
      Eligibility: 'CGPA > 8.0',
      Jd: 'CASDcsdlnslkdvnsldvnlsdkvnalskdnvslkdvnalskdvnslkvnsldvknsdlvknasdlkvnsldvknsldvknslvkns',
      Deadline: '2021-05-05',
      Status: 'Closed',
      Action: 'Apply',
    },
  ];

  return (
    <Fragment>
      profile !== null ? (
      <Fragment>console.log('not null')has profile</Fragment>) :
      <Fragment>
        <p>You have not yet setup a profile, please add some info</p>
        <Link to={'/myprofile'} className=' btn btn-primary my-1'>
          Create Profile
        </Link>
      </Fragment>
      <container style={{}}>
        <br />
        <br />
        <h2 style={{ color: 'black', paddingLeft: '20px' }}> Your DashBoard</h2>
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
          {company.map((item) => {
            return (
              <>
                <DashboardCard item={item} key={item.Num} />
                {/* {console.log(item)} */}
              </>
            );
          })}
        </div>
      </container>
    </Fragment>
  );
};

Dashboards.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  getCurrentProfile: PropTypes.func.isRequired,
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboards);
