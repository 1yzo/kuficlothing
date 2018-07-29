import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import '../../styles/header.css';
import { NavLink } from 'react-router-dom';
import '../../styles/dashboard.css';
import { auth } from '../../firebase/firebase';

class Header extends React.Component { 
    handleLogoutClick = () => {
        auth.signOut();
    }
    
    render() {
        return (
            <div>
                <div className="header">
                    <div className="padding-holder" />
                    <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <NavLink className="header__link" activeClassName="active-link" to="/admin/dashboard" exact>
                            <i className="material-icons material-icons--admin" title="dashboard">assessment</i>
                        </NavLink>
                        <NavLink className="header__link" activeClassName="active-link" to="/admin/orders">
                            <i className="material-icons material-icons--admin" title="orders">assignment</i>
                        </NavLink>
                        <NavLink 
                            className="header__link" 
                            activeClassName="active-link" 
                            to ="/admin/products" 
                            isActive={() => this.props.location.pathname.includes('product')}
                        >
                            <i className="material-icons material-icons--admin" title="products">store</i>
                        </NavLink>
                    </div>
                    <div className="padding-holder" />
                    <button className="logout-button" onClick={this.handleLogoutClick}>Logout</button>
                </div>
            </div>
        );
    }
}

export default withRouter(connect()(Header));