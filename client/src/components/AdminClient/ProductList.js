import React from 'react';
import { connect } from 'react-redux';
import  database  from '../../firebase/firebase';
import { startRemoveProduct } from '../../actions/products';

class ProductList extends React.Component {
    state = {
        searchQuery: ''
    }
    
    handleSearchChange = (e) => {
        const searchQuery = e.target.value;
        this.setState(() => ({ searchQuery }));
    }
    
    handleRemoveProduct = (e) => {
        e.stopPropagation();
        const productId = e.target.value;
        this.props.dispatch(startRemoveProduct(productId));
    }
    
    render() {
        return (
            <div className="product-list">
                <input 
                    type="text"
                    onChange={this.handleSearchChange}
                    value={this.state.searchQuery}
                    placeholder="Search products..."
                />
                {this.props.products.filter((product) => product.name.toLowerCase().includes(this.state.searchQuery.toLowerCase()))
                    .map((product) => {
                        return (
                            <div className="product-listing" onClick={() => this.props.handleClick(product)} key={product.id}>
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