import React, { Fragment } from 'react';
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  MenuItem,
  Tabs,
  ButtonToolbar,
  Button,
  Table,
  ButtonGroup,
  Row,
  Col,
  Grid,
  Panel,
  FormGroup,
  FormControl,
} from 'react-bootstrap';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/auth';

// ms for right alignment in the navbar
// me for left alignment in the navbar
const MyNavbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  return (
    <Navbar bg='dark' expand='lg' variant='dark'>
      <div className='container-fluid'>
        {/* <Container> */}
        <Navbar.Brand href='/'>TNP SVNIT</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ms-auto'>
            {/* {props.admin ? (
              <>
                <Nav.Link href='postjob'>Postjob</Nav.Link>
                <Nav.Link href='/'>Admin Dashboard</Nav.Link>
              </>
            ) : props.isloggedin ? (
              <>
                <Nav.Link href='/'>Dash Board</Nav.Link>
                <Nav.Link href='history'>History</Nav.Link>
                <Nav.Link href='alljobs'>All Jobs</Nav.Link>
                <Nav.Link href='myprofile'>My Profile</Nav.Link>
              </>
            ) : (
              <Nav.Link href='/login'>Login</Nav.Link>
            )} */}

            {!loading && (
              <Fragment>
                {isAuthenticated ? (
                  <>
                    <Nav.Link href='/'>Dash Board</Nav.Link>
                    <Nav.Link href='history'>History</Nav.Link>
                    <Nav.Link href='alljobs'>All Jobs</Nav.Link>
                    <Nav.Link href='myprofile'>My Profile</Nav.Link>
                    <Nav.Link onClick={logout} href='/login'>
                      Logout
                    </Nav.Link>
                  </>
                ) : (
                  <Nav.Link href='/login'>Login</Nav.Link>
                )}
              </Fragment>
            )}
          </Nav>
        </Navbar.Collapse>
      </div>
      {/* asdsadf */}
      {/* </Container> */}
    </Navbar>
  );
};

MyNavbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(MyNavbar);
