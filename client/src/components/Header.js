import React from 'react';
import '../styles/header.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <div className="header">
            <div className="padding-holder" />
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display:'flex' }}>
                    <NavLink className="header__link" to="/shop/all" activeClassName="active-link">SHOP</NavLink>
                    <NavLink className="header__link" to="/mission" activeClassName="active-link" >MISSION</NavLink>
                </div>
                <NavLink className="logo__link" to="/">
                    <img className="logo" src="/images/logo.PNG" alt="Kufi Clothing logo"/>
                </NavLink>
                <i className="material-icons">shopping_cart</i>
            </div>
            <div className="padding-holder" />
        </div>
    );
}

export default Header;