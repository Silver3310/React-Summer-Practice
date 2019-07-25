import axios from 'axios';

import { FETCH_ALL_CAFETERIAS } from "./types";


export function fetchAllCafeterias() {
    return function(dispatch) {
        axios.get('http://194.67.90.107/api/places/?format=json')
            .then(res => dispatch({
                type: FETCH_ALL_CAFETERIAS,
                payload: res.data
            }));
    }
}