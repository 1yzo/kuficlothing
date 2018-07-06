import React from 'react';
import { connect } from 'react-redux';
import '../styles/productDisplay.css';

class ProductDisplay extends React.Component {
    render() {
        return (
            <div className="product-display">
                <div className="product-holder">
                    {this.props.products.filter((product) => product.category === this.props.match.params.shopCategory)
                        .map(({ name, image }) => (
                            <div>
                                <div>{name}</div>
                                <img src={`${image}`} style={{ height: '100px' }}/>
                            </div>
                        ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    products: state.products
});

export default connect(mapStateToProps)(ProductDisplay);