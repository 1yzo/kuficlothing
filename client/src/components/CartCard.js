import React from 'react';
import { connect } from 'react-redux';

class CartCard extends React.Component {
    render() {
        const { product } = this.props;
        return (
            <div className="cart-card">
                <img className="cart-image" src={product.image} alt={product.name} />
                <div className="cart-name">{product.name}</div>
                <div className="quantity">
                    <input 
                        type="text"
                    />
                </div>
                <div className="cart-price">${product.price * product.count / 100}</div>
            </div>
        )
    }
}

export default connect()(CartCard);