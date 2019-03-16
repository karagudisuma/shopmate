import { combineReducers } from 'redux';
import login from './SignInBar';
import products from './Dashboard';

export default combineReducers({
    loginReducer: login.reducer,
    productsReducer: products.reducer
});
