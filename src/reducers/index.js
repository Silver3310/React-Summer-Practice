import {combineReducers} from 'redux';

import ShopReducer from './shops';


// combine all reducers into one object
const allReducers = combineReducers({
    shops: ShopReducer
});

export default allReducers;