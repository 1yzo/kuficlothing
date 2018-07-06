import React from 'react';
import { Route } from 'react-router-dom';
import '../styles/pages.css';
import ShopBar from './ShopBar';
import ProductDisplay from './ProductDisplay';

const ShopPage = () => (
    <div className="page page--shop">
        <ShopBar />
        <Route path="/shop/:shopCategory" component={ProductDisplay} />
    </div>
);

export default ShopPage;