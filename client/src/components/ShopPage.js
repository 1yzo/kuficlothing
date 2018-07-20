import React from 'react';
import { Route } from 'react-router-dom';
import '../styles/pages.css';
import ShopBar from './ShopBar';
import ProductDisplay from './ProductDisplay';

class ShopPage extends React.Component {
    render() {
        return (
            <div>
                <div className="page page--shop">
                    <ShopBar />
                    <Route path="/shop/:shopCategory" component={ProductDisplay} />
                </div>
            </div>
        );
    }
}

export default ShopPage;