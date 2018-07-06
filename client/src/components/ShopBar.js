import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/shopBar.css';

class ShopBar extends React.Component {
    render() {
        return (
            <div className="shop-bar">
                <div className="shop-bar__title">CATEGORY</div>
                <NavLink className="category-label" activeClassName="category-label--active" to="/shop/all">All</NavLink>
                <NavLink className="category-label" activeClassName="category-label--active" to="/shop/tops">Tops</NavLink>
                <NavLink className="category-label" activeClassName="category-label--active" to="/shop/bottoms">Bottoms</NavLink>
                <NavLink className="category-label" activeClassName="category-label--active" to="/shop/outerwear">Outerwear</NavLink>
                <NavLink className="category-label" activeClassName="category-label--active" to="/shop/accessories">Accessories</NavLink>
            </div>
        );
    }
}

export default ShopBar;