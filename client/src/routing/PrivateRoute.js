import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, loading },
  ...rest
}) => {
  //   <Routes>
  //     <Route
  //       {...rest}
  //       render={(props) =>
  //         !isAuthenticated && !loading ? (
  //           // <Redirect to={'/login'} />
  //           //   <Navigate to='/login' replace={true} />
  //           <Route path='/redirect' element={<Navigate to='/login' />} />
  //         ) : (
  //           <Outlet {...props} />
  //         )
  //       }
  //     />
  //   </Routes>
  console.log('inprivate');
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' replace={true} />;
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
