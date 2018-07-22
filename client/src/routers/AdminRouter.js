import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import AdminPage from '../components/AdminClient/AdminPage';
import NotFoundPage from './NotFoundPage';
class AdminRouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route to="/" component={AdminPage} exact={true}/>
                    <Route component={NotFoundPage} />
                </Switch>
            </HashRouter>
        );
    }
}

export default AdminRouter;