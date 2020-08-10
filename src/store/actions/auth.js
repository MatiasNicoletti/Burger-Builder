import * as actionTypes from './actionsTypes';
import axios from 'axios';

export const authStart = () =>{
    return {
        type: actionTypes.AUTH_START
    }
};

export const authSuccess = (authData) =>{
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData
    }
};

export const authFail = (error) =>{
    return {
        type: actionTypes.AUTH_FAIL,
        error
    }
};

export const auth = (email, password) =>{
    return dispatch => {
        dispatch(authStart());
        const authData={
            email,
            password,
            returnSecureToken:true
        }
        
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCxDgvFs6trC6YQTl3WECrTr3Ny0VMtbcE'
        , authData)
            .then(response =>{
                console.log(response.data);
                dispatch(authStart(response.data))
            })
            .catch(error => {
                console.log(error);
                dispatch(authFail(error));
            });
    }
};