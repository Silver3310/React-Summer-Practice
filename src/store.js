import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// it will automatically find an index.js because we
// specified only a folder
import rootReducer from './reducers';


// createStore(reducer, [preloadedState], [enhancer])
const initialState = {};

// to use dispatch
const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        // chrome extension
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
