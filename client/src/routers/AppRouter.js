import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DashboardPage from '../components/DashboardPage';
import ShopPage from '../components/ShopPage';
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={DashboardPage} exact={true} />
                <Route path="/shop" component={ShopPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;