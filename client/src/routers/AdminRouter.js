import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import AdminDashboard from '../components/AdminClient/AdminDashboard';
import NotFoundPage from './NotFoundPage';
import Header from '../components/AdminClient/Header';
import OrdersPage from '../components/AdminClient/OrdersPage';
import ProductsPage from '../components/AdminClient/ProductsPage';
import { startSetOrders } from '../actions/orders';
import { startSetProductStats, startSetVisitorStats } from '../actions/stats';
import LoadingPage from '../components/LoadingPage';
import '../styles/adminPage.css';
import { toggleAdmin } from '../actions/config';
import OrderInfoPage from '../components/AdminClient/OrderInfoPage';

class AdminRouter extends React.Component {
    state = {
        loaded: false
    };
    
    componentDidMount() {
        this.props.dispatch(toggleAdmin(true));
        this.props.dispatch(startSetOrders())
            .then(() => this.props.dispatch(startSetProductStats()))
                .then(() => this.props.dispatch(startSetVisitorStats()))
                    .then(() => this.setState(() => ({ loaded: true })));
    }

    componentWillUnmount() {
        this.props.dispatch(toggleAdmin(false));
    }
    
    render() {
        if (this.state.loaded) {
            return (
                <HashRouter>
                    <div>
                        <Header />
                        <Switch>
                            <Route path='/admin/' component={AdminDashboard} exact={true}/>
                            <Route path='/admin/orders' component={OrdersPage} />
                            <Route path='/admin/products' component={ProductsPage} />
                            <Route component={NotFoundPage} />
                        </Switch>
                    </div>
                </HashRouter>
            );
        } else {
            return <LoadingPage />;
        }
    }
}

export default withRouter(connect()(AdminRouter));