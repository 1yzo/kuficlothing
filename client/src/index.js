import React from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react';
import registerServiceWorker from './registerServiceWorker';
import 'normalize.css/normalize.css';
import './styles/base.css';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { startSetProducts, startAddProduct } from './actions/products';
import LoadingPage from './components/LoadingPage';

const store = configureStore().store;
const persistor = configureStore().persistor;
// REMEMBER TO CHANGE THE FIREBASE API KEYS BEFORE PRODUCTION

const jsx = (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <AppRouter />
        </PersistGate>
    </Provider>
);

ReactDOM.render(<LoadingPage />, document.getElementById('root'));

store.dispatch(startSetProducts()).then(() => {
    ReactDOM.render(jsx, document.getElementById('root'));
    registerServiceWorker();
});

