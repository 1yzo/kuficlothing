import React from 'react';
import { connect } from 'react-redux';
import { toggleAdmin } from '../../actions/config';
import '../../styles/adminPage.css';
import ProductForm from './ProductForm';
import ProductList from './ProductList';
import database from '../../firebase/firebase';
import { startAddProduct, startEditProduct } from '../../actions/products';

class AdminPage extends React.Component {
    state = {
        isAddingProduct: false,
        product: undefined
    }

    componentDidMount() {
        this.props.dispatch(toggleAdmin(true));
    }

    componentWillUnmount() {
        this.props.dispatch(toggleAdmin(false));
    }

    handleAddProductClick = () => {
        this.setState(() => ({ isAddingProduct: true }));
    }

    handleProductListingClick = (product) => {
        this.setState(() => ({ product }));
    }
    
    handleCloseForm = () => {
        this.setState(() => ({ product: undefined, isAddingProduct: false }));
    }

    addProductSubmit = (product) => {
        this.props.dispatch(startAddProduct(product));
    }

    editProductSubmit = (id, product) => {
        this.props.dispatch(startEditProduct(id, product));
    }

    render() {
        return (
            <div>
                {!this.state.product && !this.state.isAddingProduct && 
                    <button onClick={this.handleAddProductClick}>Add Product</button>
                }
                {this.state.isAddingProduct && <ProductForm onSubmit={this.addProductSubmit} closeForm={this.handleCloseForm}/>}
                {this.state.product && 
                    <ProductForm
                        onSubmit={this.editProductSubmit}
                        product={this.state.product}
                        closeForm={this.handleCloseForm}
                    />
                }
                <ProductList handleClick={this.handleProductListingClick}/>
            </div>
        );
    }
}

export default connect()(AdminPage);