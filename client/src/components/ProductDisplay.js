import React from 'react';
import { connect } from 'react-redux';
import '../styles/productDisplay.css';
import ProductCard from './ProductCard';
import sortProducts from '../selectors/products';

class ProductDisplay extends React.Component {
    render() {
        return (
            <div className="product-display">
                <div className="product-holder">
                    {
                        this.props.products.map((product, i) => <ProductCard key={i} {...product} />)
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    products: sortProducts(state.products.filter((product) => {
        if (props.match.params.shopCategory === 'all') {
            return true;
        } else {
            return product.category.includes(props.match.params.shopCategory);
        }
    }), state.filters)
});

export default connect(mapStateToProps)(ProductDisplay);