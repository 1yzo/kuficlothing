import React from 'react';
import { connect } from 'react-redux';
import { removeItem } from '../actions/cart';

class ShoppingCart extends React.Component {
    render() {
        return (
            <div className="page">
                {Object.values(this.props.items).map((item, i) => {
                    return (
                        <div>
                            <h2>{item.name}: {item.count}</h2>
                            <button onClick={() => this.props.dispatch(removeItem(item))}>x</button>
                        </div>
                    );
                })}
            </div>
        );
    }
};


const mapStateToProps = (state) => ({
    items: state.cart
});

export default connect(mapStateToProps)(ShoppingCart);