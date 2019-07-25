import {combineReducers} from 'redux';

import CafeteriaReducer from './cafeterias';


const allReducers = combineReducers({
    cafeterias: CafeteriaReducer
});

export default allReducers;