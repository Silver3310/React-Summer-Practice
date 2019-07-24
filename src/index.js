import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './components/app';

import 'semantic-ui-css/semantic.min.css';
import './index.scss';

import store from './store';


// make the store available for every single component
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
