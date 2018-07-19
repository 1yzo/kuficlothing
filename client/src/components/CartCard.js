import React from 'react';
import { connect } from 'react-redux';
import { clearItem, setCount, removeItem } from '../actions/cart';
import database from '../firebase/firebase';
import { toggleCheckout } from '../actions/config';

class CartCard extends React.Component {
    state = {
        error: '',
        liveStock: {}
    }

    componentDidMount() {
        database.ref(`products/${this.props.product.id}/stock`).once('value', (snapshot) => {
            this.setState(() => ({ liveStock: snapshot.val() }));
        });
    }
    
    removeItem = () => {
        this.props.dispatch(clearItem(this.props.product.name));
    }

    onQuantityChange = (e) => {
        const { product } = this.props;
        const quantity = Number(e.target.value); 
        if ((/[0-9]*/).test(quantity) && quantity >= 0) {
            this.props.dispatch(setCount(product.name, quantity));
            database.ref(`products/${this.props.product.id}/stock`).once('value', (snapshot) => {
                this.setState(() => ({ liveStock: snapshot.val() }));
            });
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
    
    formatName = (name) => {
        const arr = name.split(' ');
        const size = arr.slice(arr.length - 1)[0];
        let sizeLetter = size.slice(0, 1);
        sizeLetter = sizeLetter === 'x' ? 'XL' : sizeLetter.toUpperCase();
        const subName = name.replace(size, '');
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="cart-name">{subName}</div>
                <div className="cart-name cart-name--size-letter">{sizeLetter}</div>
            </div>
        );
    }
    
    render() {
        const { product, count } = this.props;
        return (
            <div className="cart-card">
                <img className="cart-image" src={product.image} alt={product.name} />
                <div style={{ alignSelf: 'center' }}>
                    <div className="cart-name">{this.formatName(product.name)}</div>
                    {product.count > this.state.liveStock[product.size] && <StockErrorMessage dispatch={this.props.dispatch}/>}
                </div>
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

class StockErrorMessage extends React.Component {
    componentDidMount() {
        this.props.dispatch(toggleCheckout(true));
    }

    componentWillUnmount() {
        this.props.dispatch(toggleCheckout(false));
    }
    
    render() {
        return (
            <div className="error" style={{ marginTop: '3rem', color: 'red' }}>Not enough of this item in stock</div>
        );
    }
}