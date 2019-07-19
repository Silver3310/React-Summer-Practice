import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers/index';


// creating a store that is gonna be available across the project
const store = createStore(allReducers);

// make the store available for every single component
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
