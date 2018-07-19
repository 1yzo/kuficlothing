import React from 'react';
import { connect } from 'react-redux';
import { clearItems } from '../actions/cart';
import PaymentCheckout from './PaymentCheckout';

class CartCheckout extends React.Component {
    render() {
        return (
            <div className="cart-checkout">
                <div className="total-price">
                    Total: <span className="price-tag">${this.props.totalPrice / 100}</span>
                    <span className="shipping-cost"> + $6.50 shipping</span>
                </div>
                <PaymentCheckout amount={this.props.totalPrice + 650} cart={this.props.items}>
                    <button
                        className="add-button cart-checkout__button"
                        disabled={!this.props.canCheckout || this.props.itemCount <= 0}
                    >
                        Check Out
                    </button>
                </PaymentCheckout>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    canCheckout: state.config.checkoutErrorCount === 0,
    itemCount: Object.values(state.cart).length 
});

export default connect(mapStateToProps)(CartCheckout);