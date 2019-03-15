import { call, put, takeLatest, all } from 'redux-saga/effects';
import axios from "axios";
import * as api from '../Shared/js/config';
import { SIGNUP_REQUEST, SIGNUP_RESPONSE, signUpApiCall } from './actions';
import { receiveSignup } from './actions';

function* signUp(action) {
    const { name, email, password } = action.data;
    let headers = {
        'Content-Type': 'application/json'
    };
    let data = JSON.stringify({
        name: name,
        email: email,
        password: password
    });
    
    try {
        const response = yield call(axios.post('https://backendapi.turing.com/customers', data, { headers: headers }));
        debugger;
        localStorage.setItem("authenticated", true);
        localStorage.setItem("data", JSON.stringify(response.userInfo.clientData));

        yield put(receiveSignup(response));
    } catch (e) {
        debugger;
        yield put(receiveSignup(e.response.data));
    }
}

function* signupWatcher() {
    yield takeLatest(SIGNUP_REQUEST, signUp);
}

export default function* sagas() {
    yield all([signupWatcher()]);
}
