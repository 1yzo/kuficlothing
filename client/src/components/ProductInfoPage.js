import React from 'react';
import { connect } from 'react-redux';
import '../styles/productDisplay.css';
import ProductImages from './ProductImages';
import ProductInfoSide from './ProductInfoSide';
import database from '../firebase/firebase';

class ProductInfoPage extends React.Component {
    componentDidMount() {
        database.ref(`stats/visitors/${this.props.product.id}`).transaction((curr) => {
            if (curr === null) {
                return 1;
            } else {
                return curr + 1;
            }
        });
    }

    render() {
        const { image, extraPics } = this.props.product;    
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