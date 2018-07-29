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
import { toggleAdmin, login, logout } from '../actions/config';
import ProductFormPage from '../components/AdminClient/ProductFormPage';
import LoginPage from '../components/AdminClient/LoginPage';
import { auth } from '../firebase/firebase';
import AdminRoute from './AdminRoute';

class AdminRouter extends React.Component {
    state = {
        loaded: false
    };
    
    componentDidMount() {
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.props.dispatch(login(user.uid));
                // this.props.history.push('/admin/dashboard');
            } else {
                this.props.dispatch(logout());
                this.props.history.push('/admin/');
            }
        });
        
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
                            <Route path="/admin/" component={LoginPage} exact />
                            <AdminRoute path='/admin/dashboard' component={AdminDashboard} />
                            <AdminRoute path='/admin/orders' component={OrdersPage} />
                            <AdminRoute path='/admin/products' component={ProductsPage} />
                            <AdminRoute path='/admin/productform/:productId' component={ProductFormPage} />
                            <AdminRoute component={NotFoundPage} />
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