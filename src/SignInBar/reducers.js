import { combineReducers } from 'redux';

import {
    SIGNUP_REQUEST,
    SIGNUP_RESPONSE
} from './actions'

function login(
    state = {
        isFetching: false,
        signupObj: null,
    },
    action
) {
    switch (action.type) {

        case SIGNUP_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                signupObj: action.data
            });

        case SIGNUP_RESPONSE:
            return Object.assign({}, state, {
                isFetching: true,
                signupObj: action.data.signupObj
            });

        default:
            return state
    }
}

export default login;