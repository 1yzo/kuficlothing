import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import ShopPage from '../components/ShopPage';
import Header from '../components/Header';
import ProductInfoPage from '../components/ProductInfoPage';
import ShoppingCart from '../components/ShoppingCart';
import AdminPage from '../components/AdminClient/AdminPage';
import NotFoundPage from './NotFoundPage';

const AppRouter = () => (
    <HashRouter >
        <div>
            <Header />
            <Switch>
                <Route path="/" component={DashboardPage} exact={true} />
                <Route path="/shop" component={ShopPage} />
                <Route path="/products/:productName" component={ProductInfoPage} />
                <Route path="/cart" component={ShoppingCart} />
                <Route path="/admin" component={AdminPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </HashRouter>
);

export default AppRouter;