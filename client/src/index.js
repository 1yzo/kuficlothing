import React from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react';
import registerServiceWorker from './registerServiceWorker';
import 'normalize.css/normalize.css';
import './styles/base.css';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { startSetProducts } from './actions/products';

const store = configureStore().store;
const persistor = configureStore().persistor;
// REMEMBER TO CHANGE THE FIREBASE API KEYS BEFORE PRODUCTION

store.dispatch(startSetProducts());

const jsx = (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <AppRouter />
        </PersistGate>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
