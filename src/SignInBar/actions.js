import axios from "axios";
import * as api from '../Shared/js/config';

export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_RESPONSE = "SIGNUP_RESPONSE";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";
export const SIGNIN_REQUEST = "SIGNIN_REQUEST";

export const requestSignup = signupObj => {
    return {
        type: SIGNUP_REQUEST,
        data: {
            name: signupObj.name,
            email: signupObj.email,
            password: signupObj.password
        }
    };
};

export const receiveSignup = customerData => {
    return {
        type: SIGNUP_RESPONSE,
        customerData
    };
};

export const failureSignup = () => {
    return {
        type: SIGNUP_FAILURE
    };
};

export const requestSignIn = signinObj => {
    return {
        type: SIGNIN_REQUEST,
        data: {
            email: signinObj.email,
            password: signinObj.password
        }
    };
};

/*
export const signUpApiCall = signupObj => {
    let headers = {
        'Content-Type': 'application/json'
    };
    let data = JSON.stringify({
        name: signupObj.name,
        email: signupObj.email,
        password: signupObj.password
    });
    return axios.post('https://backendapi.turing.com/customers', data, { headers: headers });
};


export function fetchSignUp(signupObj) {
    let body = JSON.stringify(signupObj);
    return dispatch => dispatch(requestSignup(signupObj));

        return axios.post('https://backendapi.turing.com/customers', 
            body, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
        )
            .then(function (res) {
                console.log(res.data);
            });

    };
}
//.then(json => dispatch(receiveSignup(json)))
/*, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: body
          }*/
