import { call, put, takeLatest, all } from 'redux-saga/effects';
import axios from "axios";
import * as api from '../Shared/js/config';
import { SIGNUP_REQUEST, receiveSignup } from './actions';

const signupResponseData = {
    "customer": {
        "customer_id": 131,
        "name": "Chandru",
        "email": "chandru@gmail.com",
        "address_1": null,
        "address_2": null,
        "city": null,
        "region": null,
        "postal_code": null,
        "shipping_region_id": 1,
        "day_phone": null,
        "eve_phone": null,
        "mob_phone": null
    },
    "accessToken": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXN0b21lcl9pZCI6MTMxLCJuYW1lIjoiQ2hhbmRydSIsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTU1MjY2NjIxMiwiZXhwIjoxNTUyNzUyNjEyfQ.nQ6OYXa0OcVvOWi9zNaHpiQGTomv_YqWMezenJxkIew",
    "expires_in": "24h"
}

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
        localStorage.setItem("authenticated", true);
        localStorage.setItem("accessToken", JSON.stringify(signupResponseData.accessToken));
        yield put(receiveSignup(signupResponseData.customer));
        /*
        const json = yield fetch('https://backendapi.turing.com/customers', {
            method: 'POST',
            body: JSON.stringify({
                "name": "test1",
                "email": "test1@gmail.com",
                "password": "test1"
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => console.log(data));*/
    } catch (e) {
        console.log(e);
    }
}

function* signupWatcher() {
    yield takeLatest(SIGNUP_REQUEST, signUp);
}

export default function* sagas() {
    yield all([signupWatcher()]);
}

