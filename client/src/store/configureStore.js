import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import productsReducer from '../reducers/products';
import cartReducer from '../reducers/cart';
import configReducer from '../reducers/config';
import filtersReducer from '../reducers/filters';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    config: configReducer,
    filters: filtersReducer
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
    const store = createStore(
        persistedReducer,
        composeEnhancers(applyMiddleware(thunk))
    );
    const persistor = persistStore(store);
    return { store, persistor };
};