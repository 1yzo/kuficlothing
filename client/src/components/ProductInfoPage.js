import React from 'react';
import { connect } from 'react-redux';
import '../styles/productDisplay.css';
import ProductImages from './ProductImages';
import ProductInfoSide from './ProductInfoSide';

class ProductInfoPage extends React.Component {
    render() {
        const { name, image, extraPics, price, stock } = this.props.product;    
        return(
            <div className="page page--product-info-page">
                <ProductImages image={image} extraPics={extraPics}/>
                <ProductInfoSide product={this.props.product}/>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    product: state.products.find((product) => product.name === props.match.params.productName)
});

export default connect(mapStateToProps)(ProductInfoPage)