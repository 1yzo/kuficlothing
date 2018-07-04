import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'normalize.css/normalize.css';
import './styles/base.css';
import App from './components/App';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
