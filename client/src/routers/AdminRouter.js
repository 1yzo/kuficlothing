import React from 'react';
import { connect } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import AdminDashboard from '../components/AdminClient/AdminDashboard';
import NotFoundPage from './NotFoundPage';
import Header from '../components/AdminClient/Header';
import OrdersPage from '../components/AdminClient/OrdersPage';
import ProductsPage from '../components/AdminClient/ProductsPage';
import { startSetOrders } from '../actions/orders';
import { startSetProductStats, startSetVisitorStats } from '../actions/stats';

class AdminRouter extends React.Component {
    componentDidMount() {
        this.props.dispatch(startSetOrders());
        this.props.dispatch(startSetProductStats());
        this.props.dispatch(startSetVisitorStats());
    }
    
    render() {
        return (
            <HashRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/admin/" component={AdminDashboard} exact={true}/>
                        <Route path='/admin/orders' component={OrdersPage} />
                        <Route path='/admin/products' component={ProductsPage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </div>
            </HashRouter>
        );
    }
}

export default connect()(AdminRouter);