import {combineReducers} from 'redux';

import CafeteriaReducer from './cafeterias';


// combine all reducers into one object
const allReducers = combineReducers({
    cafeterias: CafeteriaReducer
});

export default allReducers;