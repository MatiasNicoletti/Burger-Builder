import * as actionTypes from './actionsTypes';
import axios from 'axios';

export const authStart = () =>{
    return {
        type: actionTypes.AUTH_START
    }
};

export const authSuccess = (idToken,userId) =>{
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken,
        userId
    }
};

export const authFail = (error) =>{
    return {
        type: actionTypes.AUTH_FAIL,
        error
    }
};

export const auth = (email, password, isSignup) =>{
    return dispatch => {
        dispatch(authStart());
        const authData={
            email,
            password,
            returnSecureToken:true
        };
        let url ='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCxDgvFs6trC6YQTl3WECrTr3Ny0VMtbcE';
        if(!isSignup){
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCxDgvFs6trC6YQTl3WECrTr3Ny0VMtbcE';
        }
        axios.post(url
        , authData)
            .then(response =>{
                console.log(response.data);
                dispatch(authSuccess(response.data.idToken, response.data.localId));
            })
            .catch(error => {
                dispatch(authFail(error.response.data.error));
            });
    }
};