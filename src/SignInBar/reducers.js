import {
    SIGNUP_REQUEST,
    SIGNUP_RESPONSE,
    SIGNUP_FAILURE
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
            debugger;
            return Object.assign({}, state, {
                isFetching: false,
                signupObj: action.customerData
            });
        
        case SIGNUP_FAILURE:
        return Object.assign({}, state, {
            isFetching: false,
            signupObj: null
        });

        default:
            return state
    }
}

export default login;