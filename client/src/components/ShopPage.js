import React from 'react';
import '../styles/pages.css';
import ShopBar from './ShopBar';
import ProductDisplay from './ProductDisplay';

const ShopPage = () => (
    <div className="page page--shop">
    
        <ShopBar />
        <ProductDisplay />
    </div>
);

export default ShopPage;