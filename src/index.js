import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import App from './components/app/App';
import allReducers from './reducers/index';

import 'semantic-ui-css/semantic.min.css';
import './index.scss';


// creating a store that is gonna be available across the project
const store = createStore(allReducers);

// make the store available for every single component
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
