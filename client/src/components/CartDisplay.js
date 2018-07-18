import React from 'react';
import { connect } from 'react-redux';
import CartCard from './CartCard';
import CartCheckout from './CartCheckout';

class CartDisplay extends React.Component {
    render() {
        return (
            <div className="cart-display">
                <CartCheckout totalPrice={this.props.totalPrice} items={this.props.items}/>
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