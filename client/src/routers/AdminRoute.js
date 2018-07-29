import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const AdminRoute = ({ isAuthenticated, component: Component, ...rest }) => {
    if (isAuthenticated) {
        return <Route {...rest} component={Component}/>
    } else return <Redirect to="/admin/" />
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.config.user
});

export default connect(mapStateToProps)(AdminRoute);