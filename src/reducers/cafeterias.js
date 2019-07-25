import { FETCH_ALL_CAFETERIAS } from '../actions/types';


const initialState = {
    items: []
};


export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_ALL_CAFETERIAS:
            return {
                ...state,
                items: action.payload
            };
        default:
            return state;
    }
}
