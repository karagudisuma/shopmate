import { combineReducers } from 'redux';
import login from './SignInBar';

export default combineReducers({
    loginReducer: login.reducer
});
