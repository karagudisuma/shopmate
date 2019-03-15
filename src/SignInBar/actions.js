import axios from "axios";
import * as api from '../Shared/js/config';

export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_RESPONSE = "SIGNUP_RESPONSE";

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

export const receiveSignup = signupObj => {
    return {
        type: SIGNUP_RESPONSE,
        signupObj
    };
};

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

/*
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
