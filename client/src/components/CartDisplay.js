import React from 'react';
import { connect } from 'react-redux';
import CartCard from './CartCard';
import PaymentCheckout from './PaymentCheckout';

class CartDisplay extends React.Component {
    render() {
        return (
            <div className="cart-display">
                <div className="cart-checkout">
                    <div className="total-price">Total: <span>${this.props.totalPrice / 100}</span></div>
                    <PaymentCheckout amount={this.props.totalPrice} cart={this.props.items}>
                        <button className="add-button cart-checkout__button">Check Out</button>
                    </PaymentCheckout>
                </div>
                <div className="cart-card-holder">
                    {this.props.items.map((item, i) => (
                        <CartCard key={i} product={item} count={item.count}/>
                    ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    items: Object.values(state.cart),
    totalPrice: Object.values(state.cart).reduce((acc, curr) => {
        return acc + curr.count * curr.price;
    }, 0)
});

export default connect(mapStateToProps)(CartDisplay);