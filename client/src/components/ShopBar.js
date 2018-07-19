import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import '../styles/shopBar.css';
import { sortByPrice, setText } from '../actions/filters';

class ShopBar extends React.Component {
    sortPriceLowToHigh = () => {
        this.props.dispatch(sortByPrice('priceLow'));
    }

    sortPriceHighToLow = () => {
        this.props.dispatch(sortByPrice('priceHigh'));
    }

    onSearchTextChange = (e) => {
        const text = e.target.value;
        this.props.dispatch(setText(text));
    }

    clearSearchText = () => {
        this.props.dispatch(setText(''));
    }
    
    render() {
        return (
            <div className="shop-bar">
                <input
                    className="search-bar"
                    type="text"
                    placeholder={`Search...`}
                    value={this.props.searchText}
                    onChange={this.onSearchTextChange}
                    onBlur={this.clearSearchText}
                />
                <div className="shop-bar__title">CATEGORY</div>
                <NavLink className="category-label" activeClassName="category-label--active" to="/shop/all">All</NavLink>
                <NavLink className="category-label" activeClassName="category-label--active" to="/shop/tops">Tops</NavLink>
                <NavLink className="category-label" activeClassName="category-label--active" to="/shop/bottoms">Bottoms</NavLink>
                <NavLink className="category-label" activeClassName="category-label--active" to="/shop/outerwear">Outerwear</NavLink>
                <NavLink className="category-label" activeClassName="category-label--active" to="/shop/accessories">Accessories</NavLink>

                <div className="shop-bar__title" style={{ marginTop: '3rem', marginBottom: '2rem' }}>SORT</div>
                <div style={{ display: 'flex' }}>
                    <div className="category-label" style={{ marginRight: '2rem' }}>Price</div>
                    <i 
                        className={"material-icons price-dir" + (this.props.priceDir === 'priceHigh' ? " price-dir--active" : "")} 
                        onClick={this.sortPriceHighToLow}
                    >
                        keyboard_arrow_down
                    </i>
                    <i 
                        className={"material-icons price-dir" + (this.props.priceDir === 'priceLow' ? " price-dir--active" : "")} 
                        onClick={this.sortPriceLowToHigh}
                    >
                        keyboard_arrow_up
                    </i>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    priceDir: state.filters.sortBy,
    searchText: state.filters.text
});

export default withRouter(connect(mapStateToProps)(ShopBar));