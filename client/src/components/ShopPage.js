import React from 'react';
import { Route } from 'react-router-dom';
import '../styles/pages.css';
import ShopBar from './ShopBar';
import ProductDisplay from './ProductDisplay';

class ShopPage extends React.Component {
    componentDidMount() {
        // this.props.history.push('/shop/all')
    }
    
    render() {
        return (
            <div className="page page--shop">
                <ShopBar />
                <Route path="/shop/:shopCategory" component={ProductDisplay} />
            </div>
        );
    }
}

export default ShopPage;