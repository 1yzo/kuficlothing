import React from 'react';
import '../styles/shopBar.css';

class ShopBar extends React.Component {
    render() {
        return (
            <div className="shop-bar">
                <h3>CATEGORY</h3>
                <div className="category-label">Tops</div>
                <div className="category-label">Bottoms</div>
                <div className="category-label">Outerwear</div>
                <div className="category-label">Accessories</div>
            </div>
        );
    }
}

export default ShopBar;