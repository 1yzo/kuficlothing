import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import { setAdminProduct } from '../../actions/config';

class ProductsPage extends React.Component {
    state= { searchQuery: '' };

    handleSearchChange = (e) => {
        const searchQuery = e.target.value;
        this.setState(() => ({ searchQuery }));
    }
    
    render() {
        return (
            <div className="page" style={{ paddingLeft: '20rem', paddingRight: '20rem' }}>
                <div style={{ display: 'flex', marginBottom: '3rem' }}>
                    <div style={{ fontSize: '3rem' }}>Products</div>
                    <Link to="/admin/productform/new-product" className="add-product-button">
                        <i className="material-icons">add</i>
                    </Link>
                    <input 
                        className="products-search"
                        type="text"
                        value={this.state.searchQuery}
                        onChange={this.handleSearchChange}
                        placeholder="Search products"
                    />
                </div>
                <div className="products-container">
                    {this.props.products
                        .filter(({ name }) => name.toLowerCase().includes(this.state.searchQuery.toLowerCase()))
                        .map((product) => (
                        <Link 
                            to={`/admin/productform/${product.id}`} key={product.id}
                            className="products-product"
                        >
                            <img className="products-product__img" src={product.image} alt={product.name} />
                            <div className="products-product__info">
                                <div>{product.name}</div>
                                <div className="products-product__info-price">
                                    {numeral(product.price / 100).format('$0, 0.00')}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    products: state.products
});

export default connect(mapStateToProps)(ProductsPage);