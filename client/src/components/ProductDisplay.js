import React from 'react';
import { connect } from 'react-redux';
import '../styles/productDisplay.css';
import ProductCard from './ProductCard';

class ProductDisplay extends React.Component {
    render() {
        return (
            <div className="product-display">
                <div className="product-holder">
                    {
                        this.props.products.filter((product) => {
                            if (this.props.match.params.shopCategory === 'all') {
                                return true;
                            } else {
                                return product.category === this.props.match.params.shopCategory;
                            }
                        }).map((product, i) => <ProductCard key={i} {...product} />)
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    products: state.products
});

export default connect(mapStateToProps)(ProductDisplay);