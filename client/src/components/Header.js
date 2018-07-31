import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import '../styles/header.css';
import { NavLink } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';

class Header extends React.Component { 
    state = { showHamMenu: false };

    triggerHam = () => {
        this.setState((prevState) => ({ showHamMenu: !prevState.showHamMenu }));
    }

    closeHam = () => {
        this.setState(() => ({ showHamMenu: false }));
    }
    
    render() {
        if (this.props.shouldRender) {
            return (
                <div>
                    <HamburgerMenu
                        close={this.closeHam}
                        color={'white'}
                        show={this.state.showHamMenu}
                        position="left" items={[
                            <NavLink
                                onClick={this.triggerHam} 
                                className="header__link header__link--ham"
                                to="/shop/all" 
                                activeClassName="active-link" 
                                exact
                                isActive={() => {  
                                    return this.props.location.pathname.includes('shop');
                                }}

                            >
                                SHOP
                            </NavLink>,
                            <NavLink
                                onClick={this.triggerHam} 
                                className="header__link header__link--ham"
                                to="/mission" activeClassName="active-link"
                            >
                                MISSION
                            </NavLink>,
                            <NavLink
                                onClick={this.triggerHam} 
                                className="header__link header__link--ham"
                                to="/contact" activeClassName="active-link"
                            >
                                CONTACT
                            </NavLink>
                        ]}
                    />
                    <div className="header">
                        <div className="padding-holder" />
                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div style={{ display:'flex' }}>
                                <div className="hamburger-trigger">
                                    <i className="material-icons hamburger-trigger" onClick={this.triggerHam}>menu</i>
                                </div>
                                <NavLink 
                                    className="header__link desktop-only" to="/shop/all" 
                                    activeClassName="active-link" 
                                    exact
                                    isActive={() => {  
                                        return this.props.location.pathname.includes('shop');
                                    }}

                                >
                                    SHOP
                                </NavLink>
                                <NavLink
                                    className="header__link desktop-only"
                                    to="/mission" activeClassName="active-link"
                                >
                                    MISSION
                                </NavLink>
                                <NavLink
                                    className="header__link desktop-only"
                                    to="/contact" activeClassName="active-link"
                                >
                                    CONTACT
                                </NavLink>
                            </div>
                            <NavLink className="logo__link" to="/">
                                <img className="logo" src="/images/logo.PNG" alt="Kufi Clothing logo"/>
                            </NavLink>
                            <NavLink className="header__link header__link--right" activeClassName="active-link" to="/cart">
                                <i className="material-icons">shopping_cart</i>
                                <div className="cart-count">{this.props.cartCount}</div>
                            </NavLink>
                        </div>
                        <div className="padding-holder" />
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

const mapStateToProps = (state) => ({
    shouldRender: !state.config.isAdminPage,
    cartCount: Object.values(state.cart).length > 0 ? Object.values(state.cart).reduce((acc, curr) => acc + curr.count, 0) : 0
});

export default withRouter(connect(mapStateToProps)(Header));