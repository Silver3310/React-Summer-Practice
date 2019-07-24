import { FETCH_ALL_CAFETERIAS } from '../actions/types';


const initialState = {
    // represents cafeterias that are coming from the FETCH_ALL_CAFETERIAS action
    items: []
};


export default function(state = initialState, action) {
    // now it has only one option, later there will be more
    switch (action.type) {
        case FETCH_ALL_CAFETERIAS:
            return {
                // return the same state with a payload
                ...state,
                items: action.payload
            };
        default:
            return state;
    }
}
