import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import ShopPage from '../components/ShopPage';
import Header from '../components/Header';
import ProductInfoPage from '../components/ProductInfoPage';
import ShoppingCartPage from '../components/ShoppingCartPage';
import NotFoundPage from './NotFoundPage';
import MissionPage from '../components/MissionPage';
import AdminRouter from './AdminRouter';
import ContactPage from '../components/ContactPage';

const AppRouter = () => (
    <HashRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={DashboardPage} exact={true} />
                <Route path="/shop"  component={ShopPage} />
                <Route path="/products/:productName" component={ProductInfoPage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/cart" component={ShoppingCartPage} />
                <Route path="/mission" component={MissionPage} />
                <Route path="/admin" component={AdminRouter} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </HashRouter>
);

export default AppRouter;