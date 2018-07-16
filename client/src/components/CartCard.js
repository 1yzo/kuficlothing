import React from 'react';
import { connect } from 'react-redux';
import { removeItem } from '../actions/cart';

class CartCard extends React.Component {
    removeItem = () => {
        this.props.dispatch(removeItem(this.props.product));
    }
    
    render() {
        const { product, count } = this.props;
        return (
            <div className="cart-card">
                <img className="cart-image" src={product.image} alt={product.name} />
                <div className="cart-name">{product.name}</div>
                <div className="quantity">
                    <input 
                        type="number"
                        value={count}
                    />
                </div>
                <div className="cart-price">${product.price * count / 100}</div>
                <i className="material-icons cart-remove" onClick={this.removeItem}>clear</i>
            </div>
        )
    }
}

export default connect()(CartCard);