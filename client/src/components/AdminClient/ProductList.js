import React from 'react';
import { connect } from 'react-redux';
import  database  from '../../firebase/firebase';
import { startRemoveProduct } from '../../actions/products';

class ProductList extends React.Component {
    handleRemoveProduct = (e) => {
        const productId = e.target.value;
        this.props.dispatch(startRemoveProduct(productId));
    }
    
    render() {
        return (
            <div>
                {this.props.products.map((product) => {
                    return (
                        <div key={product.id} className="productListing">
                            <h4>{product.name}</h4>
                            <button onClick={this.handleRemoveProduct} value={product.id}>Remove</button>
                        </div>
                    )
                })}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    products: state.products
});

export default connect(mapStateToProps)(ProductList);