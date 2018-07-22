import React from 'react';
import { connect } from 'react-redux';
import { clearItems } from '../actions/cart';
import PaymentCheckout from './PaymentCheckout';
import numeral from 'numeral';

class CartCheckout extends React.Component {
    render() {
        return (
            <div className="cart-checkout">
                <div className="total-price-container">
                    <div className="total-price">Total:</div>
                    <span className="price-tag">{numeral(this.props.totalPrice / 100).format('$0, 0.00')}</span>
                    <span className="shipping-cost"> + {numeral(650 * this.props.itemCount / 100).format('$0, 0.00')} shipping</span>
                </div>
                <PaymentCheckout amount={this.props.totalPrice + 650} cart={this.props.items}>
                    <button
                        className="cart-checkout__button"
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