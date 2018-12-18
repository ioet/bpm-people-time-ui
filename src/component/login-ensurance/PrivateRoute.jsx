import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = (props) => {
  const { isLoggedIn, component: Component } = props;

  let componentToRender;

  if (isLoggedIn) {
    componentToRender = (
      <Component />
    );
  } else {
    componentToRender = (
      <Redirect to={{
        pathname: '/login',
      }}
      />
    );
  }

  return (
    <Route
      render={() => componentToRender}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

export default PrivateRoute;
