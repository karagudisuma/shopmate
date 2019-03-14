import * as url from "../Shared/js/config";

export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_RESPONSE = "SIGNUP_RESPONSE";

function requestSignup(signupObj) {
    return {
        type: SIGNUP_REQUEST,
        data: {
            name: signupObj.name,
            email: signupObj.email,
            password: signupObj.password
        }
    };
}

function receiveSignup(signupObj) {
    return {
        type: SIGNUP_RESPONSE,
        signupObj
    }
}

export function fetchSignUp(signupObj) {
    let body = JSON.stringify(signupObj);
    return dispatch => {
        dispatch(requestSignup(signupObj));
        return fetch('https://backendapi.turing.com/customers', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: body
        })
            .then(function (response) {
                return response.json();
            }).then(function (data) {
                console.log(data);
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