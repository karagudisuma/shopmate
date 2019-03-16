import {
    PRODUCTS_LIST_REQUEST,
    PRODUCTS_LIST_RESPONSE,
    PRODUCTS_LIST_FAILURE
} from './actions'

function products(
    state = {
        isFetching: false,
        productsList: null,
    },
    action
) {
    switch (action.type) {

        case PRODUCTS_LIST_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                productsList: null
            });

        case PRODUCTS_LIST_RESPONSE:
            return Object.assign({}, state, {
                isFetching: false,
                productsList: action.data
            });
        
        case PRODUCTS_LIST_FAILURE:
        return Object.assign({}, state, {
            isFetching: false,
            productsList: null
        });

        default:
            return state
    }
}

export default products;