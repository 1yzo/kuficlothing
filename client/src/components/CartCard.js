import React from 'react';
import { connect } from 'react-redux';
import { clearItem, setCount, removeItem } from '../actions/cart';

class CartCard extends React.Component {
    removeItem = () => {
        this.props.dispatch(clearItem(this.props.product.name));
    }

    onQuantityChange = (e) => {
        const { product } = this.props;
        const quantity = Number(e.target.value); 
    if ((/[0-9]*/).test(quantity) && quantity >= 0) {
            this.props.dispatch(setCount(product.name, quantity));
        }
    }    
    
    onQuantityClick = (e) => {
        const { product } = this.props;
        const count = product.count + 1;
        const dir = e.target.attributes.value.value;
        if (dir === 'down' && product.count >= 1) {
            this.props.dispatch(removeItem(product));
        } else if (dir === 'up') {
            this.props.dispatch(setCount(product.name, count));
        }
    }
    
    render() {
        const { product, count } = this.props;
        return (
            <div className="cart-card">
                <img className="cart-image" src={product.image} alt={product.name} />
                <div className="cart-name">{product.name}</div>
                <div className="quantity">
                    <div className="quantity__button" onClick={this.onQuantityClick} value="down">-</div>
                    <input 
                        type="number"
                        value={count}
                        onChange={this.onQuantityChange}
                    />
                    <div className="quantity__button" onClick={this.onQuantityClick} value="up">+</div>
                </div>
                <div className="cart-price" value="up">${product.price * count / 100}</div>
                <i className="material-icons cart-remove" onClick={this.removeItem}>clear</i>
            </div>
        )
    }
}

export default connect()(CartCard);