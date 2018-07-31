import React from 'react';
import { connect } from 'react-redux';
import '../styles/shoppingCart.css'
import CartDisplay from './CartDisplay';

class ShoppingCartPage extends React.Component {
    render() {
        return (
            <div className="page page--shopping-cart-page">
                <CartDisplay />
            </div>
        );
    }
};


const mapStateToProps = (state) => ({
    items: state.cart
});

export default connect(mapStateToProps)(ShoppingCartPage);