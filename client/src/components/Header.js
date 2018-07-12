import React from 'react';
import { connect } from 'react-redux';
import '../styles/header.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => { 
    if (props.shouldRender) {
        return (
            <div className="header">
                <div className="padding-holder" />
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display:'flex' }}>
                        <NavLink className="header__link" to="/shop" activeClassName="active-link">SHOP</NavLink>
                        <NavLink className="header__link" to="/mission" activeClassName="active-link" >MISSION</NavLink>
                    </div>
                    <NavLink className="logo__link" to="/">
                        <img className="logo" src="/images/logo.PNG" alt="Kufi Clothing logo"/>
                    </NavLink>
                    <NavLink className="header__link header__link--right" activeClassName="active-link" to="/cart">
                        <i className="material-icons">shopping_cart</i>
                    </NavLink>
                </div>
                <div className="padding-holder" />
            </div>
        );
    } else {
        return null;
    }
}

const mapStateToProps = (state) => ({
    shouldRender: !state.config.isAdminPage
});

export default connect(mapStateToProps)(Header);