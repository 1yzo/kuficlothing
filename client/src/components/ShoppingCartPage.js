import React from 'react';
import { connect } from 'react-redux';
import '../styles/shoppingCart.css'
import { removeItem } from '../actions/cart';
import CartDisplay from './CartDisplay';
import CartCheckout from './CartCheckout';

class ShoppingCartPage extends React.Component {
    render() {
        return (
            <div className="page page--shopping-cart-page">
                <CartDisplay />
                <CartCheckout />
            </div>
        );
    }
};


const mapStateToProps = (state) => ({
    items: state.cart
});

export default connect(mapStateToProps)(ShoppingCartPage);