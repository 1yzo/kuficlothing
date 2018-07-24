import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import '../../styles/header.css';
import { NavLink } from 'react-router-dom';
import '../../styles/dashboard.css';

class Header extends React.Component { 
    render() {
        return (
            <div>
                <div className="header">
                    <div className="padding-holder" />
                    <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <NavLink className="header__link" activeClassName="active-link" to="/admin/" exact>
                            <i className="material-icons material-icons--admin" >dashboard</i>
                        </NavLink>
                        <NavLink className="header__link" activeClassName="active-link" to="/admin/orders">
                            <i className="material-icons material-icons--admin" alt="orders">flight_takeoff</i>
                        </NavLink>
                        <NavLink className="header__link" activeClassName="active-link" to ="/admin/products">
                            <i className="material-icons material-icons--admin" >store</i>
                        </NavLink>
                    </div>
                    <div className="padding-holder" />
                </div>
            </div>
        );
    }
}

export default withRouter(connect()(Header));