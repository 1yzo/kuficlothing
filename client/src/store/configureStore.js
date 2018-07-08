import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import productsReducer from '../reducers/products';
import cartReducer from '../reducers/cart';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer
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