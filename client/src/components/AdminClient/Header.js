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
                        <NavLink className="header__link" activeClassName="active-link" to="/admin/" exact="true">Dashboard</NavLink>
                        <NavLink className="header__link" activeClassName="active-link" to="/admin/orders">Orders</NavLink>
                        <NavLink className="header__link" activeClassName="active-link" to ="/admin/products">Products</NavLink>
                    </div>
                    <div className="padding-holder" />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    shouldRender: !state.config.isAdminPage,
    cartCount: Object.values(state.cart).length > 0 ? Object.values(state.cart).reduce((acc, curr) => acc + curr.count, 0) : 0
});

export default withRouter(connect(mapStateToProps)(Header));