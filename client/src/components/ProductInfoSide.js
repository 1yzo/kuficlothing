import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions/cart';

const ProductInfoSide = (props) => (
    <div>
        <h2>{props.product.name}</h2>
        <div className="size-selection">
            <div>Small</div>
            <div>Medium</div>
            <div>Large</div>
            <div>X-Large</div>
        </div>
        <button onClick={() => props.addToCart(props.product)}>Add To Cart</button>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    addToCart: (item) => dispatch(addItem(item))
});

export default connect(undefined, mapDispatchToProps)(ProductInfoSide);