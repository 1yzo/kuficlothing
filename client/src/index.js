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
        name: 'Mukhtalif Long Sleeve Tee (Olive)',
        category: 'tops',
        image: '/images/placeholder.JPG',
        price: 2500,
        stock: {
            small: true,
            medium: true,
            large: true,
            xLarge: true
        }
    },
    {
        name: 'Jannah Hoodie (Blue)',
        category: 'outerwear',
        image: '/images/IMG_8037.JPG',
        price: 3500,
        stock: {
            small: true,
            medium: true,
            large: true,
            xLarge: true
        }
    },
    {
        name: 'Sindhi Ajrak Long Sleeve Tee (Tan)',
        cateogory: 'tops',
        image: '/images/IMG_8046.JPG',
        price: 2500,
        stock: {
            small: true,
            medium: true,
            large: true,
            xLarge: true
        }
    },
    {
        name: 'Jannah Hoodie (Tan)',
        category: 'outerwear',
        image: '/images/IMG_8039.JPG',
        price: 3500,
        stock: {
            small: true,
            medium: true,
            large: true,
            xLarge: true
        }
    },
    {
        name: 'Mukhtalif Long Sleeve Tee (Black)',
        category: 'tops',
        image: '/images/IMG_8208.JPG',
        price: 2500,
        stock: {
            small: true,
            medium: true,
            large: true,
            xLarge: true
        }
    },
    {
        name: 'Sindhi Ajrak Long Sleeve Tee (Black)',
        category: 'tops',
        image: '/images/IMG_8041.JPG',
        price: 2500,
        stock: {
            small: true,
            medium: true,
            large: true,
            xLarge: true
        }
    },
    {
        name: 'Malcolm X Long Sleeve Tee (Black)',
        category: 'tops',
        image: '/images/IMG_8044.JPG',
        price: 2500,
        stock: {
            small: true,
            medium: true,
            large: true,
            xLarge: true
        }
    },
    {
        name: 'Sabr and Shukr Windbreaker (Black)',
        category: 'outerwear',
        image: '/images/IMG_5846.JPG',
        price: 3500,
        stock: {
            small: false,
            medium: false,
            large: false,
            xLarge: false
        }
    },
    {
        name: 'Sabr and Shukr Windbreaker (White)',
        category: 'outerwear',
        image: '/images/IMG_5845.JPG',
        price: 3500,
        stock: {
            small: false,
            medium: false,
            large: false,
            xLarge: false
        }
    },
    {
        name: "insha'Allah Dad Hat (White)",
        category: 'accessories',
        image: '/images/IMG_4594.jpg',
        price: 1500,
        stock: {
            small: false,
            medium: false,
            large: false,
            xLarge: false
        }
    },
    {
        name: "insha'Allah Dad Hat (Black)",
        category: 'accessories',
        image: '/images/IMG_9087.JPG.jpeg',
        price: 1500,
        stock: {
            small: false,
            medium: false,
            large: false,
            xLarge: false
        }
    },
    {
        name: "Malcolm X Tee",
        category: 'tops',
        image: '/images/IMG_4592.JPG',
        price: 2500,
        stock: {
            small: false,
            medium: false,
            large: false,
            xLarge: false
        }
    },
    {
        name: "Misconceptions Tee (Black)",
        category: 'tops',
        image: '/images/IMG_9091.JPG.jpeg',
        price: 2500,
        stock: {
            small: false,
            medium: false,
            large: false,
            xLarge: false
        }
    },
    {
        name: "Misconceptions Tee (White)",
        category: 'tops',
        image: '/images/IMG_4566-1.JPG',
        price: 2500,
        stock: {
            small: false,
            medium: false,
            large: false,
            xLarge: false
        }
    },
    {
        name: "No Doubt Hoodie",
        category: 'outerwear',
        image: '/images/IMG_0380.JPG',
        price: 3500,
        stock: {
            small: false,
            medium: false,
            large: false,
            xLarge: false
        }
    },
    {
        name: "Minaret Long Sleeve (White)",
        category: 'tops',
        image: '/images/IMG_0526.JPG',
        price: 2500,
        stock: {
            small: false,
            medium: false,
            large: false,
            xLarge: false
        }
    },
    {
        name: "Logo Hooded Long Sleeve (Heather Red)",
        category: 'outerwear',
        image: '/images/IMG_0435.JPG',
        price: 2500,
        stock: {
            small: true,
            medium: false,
            large: true,
            xLarge: true
        }
    },
    {
        name: "Minaret Tee (Black)",
        category: 'tops',
        image: '/images/IMG_6966.JPG',
        price: 2500,
        stock: {
            small: false,
            medium: false,
            large: false,
            xLarge: false
        }
    },
    {
        name: "Logo Polo (Light Blue)",
        category: 'tops',
        image: '/images/IMG_0730.JPG',
        price: 1500,
        stock: {
            small: true,
            medium: false,
            large: true,
            xLarge: true
        }
    },
    {
        name: "Logo Polo (Navy)",
        category: 'tops',
        image: '/images/IMG_0709.JPG',
        price: 1500,
        stock: {
            small: true,
            medium: false,
            large: true,
            xLarge: true
        }
    },
    {
        name: "Logo Hooded Long Sleeve (Black)",
        category: 'outerwear',
        image: '/images/IMG_0529.JPG',
        price: 2500,
        stock: {
            small: false,
            medium: false,
            large: false,
            xLarge: false
        }
    }
]))

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
