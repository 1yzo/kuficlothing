import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { sortByPrice } from '../actions/filters';
import '../styles/shopBar.css'; 
import SearchBar from './SearchBar';

class MobileShopBar extends React.Component {
    onCategoryChange= (e) => {
        const value = e.target.value;
        this.props.history.push(`/shop/${value}`);
    }
    
    onSortChange = (e) => {
        const value = e.target.value;
        if (value) {
            this.props.dispatch(sortByPrice(value));
        }
    }
    
    render() {
        return (
            <div className="mobile-shop-bar">
                <SearchBar />
                <select onChange={this.onCategoryChange}>
                    <option value="all">All</option>
                    <option value="tops">Tops</option>
                    <option value="bottoms">Bottoms</option>
                    <option value="outerwear">Outerwear</option>
                    <option value="accessories">Accessories</option>
                </select>
                <select onChange={this.onSortChange}>
                    <option value="">Sort</option>
                    <option value="priceLow">Price: Low to High</option>
                    <option value="priceHigh">Price: High to Low</option>
                </select>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    priceDir: state.filters.sortBy
});

export default withRouter(connect(mapStateToProps)(MobileShopBar));