import React from 'react';
import PaymentCheckout from './PaymentCheckout';

class CartCheckout extends React.Component {
    render() {
        return (
            <div className="cart-checkout">
                <div className="total-price">Total: <span>${this.props.totalPrice / 100}</span></div>
                <PaymentCheckout amount={this.props.totalPrice} cart={this.props.items}>
                    <button className="add-button cart-checkout__button">Check Out</button>
                </PaymentCheckout>
            </div>
        );
    }
}

export default CartCheckout;