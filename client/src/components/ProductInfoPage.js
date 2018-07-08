import React from 'react';
import { connect } from 'react-redux';
import '../styles/productDisplay.css';
import { addItem } from '../actions/cart';

class ProductInfoPage extends React.Component {
    handleAddToCart = () => {
        this.props.addToCart(this.props.product);
    }
    
    render() {
        const { name, image, price, stock } = this.props.product;    
        return(
            <div className="page">

                <img className="image--big" src={image} alt={name} />
                <h2>{name}</h2>
                <div className="size-selection">
                    <div>Small</div>
                    <div>Medium</div>
                    <div>Large</div>
                    <div>X-Large</div>
                </div>
                <button onClick={this.handleAddToCart}>Add To Cart</button>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    product: state.products.find((product) => product.name === props.match.params.productName)
});

const mapDispatchToProps = (dispatch) => ({
    addToCart: (item) => dispatch(addItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductInfoPage)