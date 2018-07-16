import React from 'react';
import { connect } from 'react-redux';
import CartCard from './CartCard';

class CartDisplay extends React.Component {
    render() {
        return (
            <div className="cart-display">
                {this.props.items.map((item, i) => (
                    <CartCard key={i} product={item}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    items: Object.values(state.cart)
});

export default connect(mapStateToProps)(CartDisplay);