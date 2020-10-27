import _ from 'lodash';
import {
    STREAM_CREATE,
    STREAM_DELETE,
    STREAM_EDIT,
    FETCH_STREAM,
    FETCH_STREAMS
} from "../actions/types";
  
export default (state = {}, action) => {
    switch (action.type) {
        case STREAM_CREATE:
            // const newState = { ...state };
            // newState[actio.payload.id] = action.payload;
            // return newState;

            //ES6 syntax for above 
            return { ...state, [action.payload.id]: action.payload };
        case STREAM_EDIT:
            return { ...state, [action.payload.id]: action.payload };
        case FETCH_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case STREAM_DELETE:
            return _.omit(state, action.payload);
        case FETCH_STREAMS:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        default:
            return state
    }
}