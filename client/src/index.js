import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'normalize.css/normalize.css';
import './styles/base.css';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { setProducts } from './actions/products';

const store = configureStore();

store.dispatch(setProducts([
    {
        name: 'mukhtalif tee',
        category: 'tops',
        image: '/images/placeholder.JPG'
    },
    {
        name: 'mukhtalif tee',
        category: 'tops',
        image: '/images/placeholder.JPG'
    },{
        name: 'mukhtalif tee',
        category: 'tops',
        image: '/images/placeholder.JPG'
    },{
        name: 'mukhtalif tee',
        category: 'tops',
        image: '/images/placeholder.JPG'
    },{
        name: 'mukhtalif tee',
        category: 'tops',
        image: '/images/placeholder.JPG'
    },{
        name: 'mukhtalif tee',
        category: 'tops',
        image: '/images/placeholder.JPG'
    },{
        name: 'mukhtalif tee',
        category: 'tops',
        image: '/images/placeholder.JPG'
    },{
        name: 'mukhtalif tee',
        category: 'tops',
        image: '/images/placeholder.JPG'
    },
    {
        name: 'another tee',
        category: 'tops',
        image: '/images/placeholder.JPG'
    },
    {
        name: 'another tee also',
        category: 'tops',
        image: '/images/placeholder.JPG'
    },
    {
        name: 'an outerwear',
        category: 'outerwear',
        image: '/images/placeholder.JPG'
    }
]))

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
