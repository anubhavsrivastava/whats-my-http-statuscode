import * as actionTypes from '../actions/actionTypes';

const initialState = {
    version: "0.0.0",
    name: "application"
};

export default function appReducer(state = initialState, action) {
    switch(action.type) {
        case actionTypes.UPDATE_APPLICATION:
            return Object.assign({}, state, action.payload );
        default:
            return state;
    }
}