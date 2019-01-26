import axios from 'axios';
import {GET_TOKEN, LOGIN,LOGOUT, SIGNUP} from './types';
// import Cookies from "universal-cookie/cjs";

export const signup = (user) => dispatch => {
    axios.post(`api/user/signup`, user)
        .then(res =>
            dispatch({
                type: SIGNUP,
            })
        )
};

export const login = (user) => dispatch => {
    console.log("reaches customer actions login");
    axios.post(`api/user/login`, user)
        .then(res =>
            // console.log("login part succesful"),
            dispatch({
                type: LOGIN,
                payload: res.data.token
            })

        ).catch(error => {
            console.log(error);
        // const cookies = new Cookies();
        // cookies.set('SyscoPOSCookie', 'Invalid', {path: '/'});
        dispatch({
            type: LOGOUT
        })

    })


};


// export const getToken = () => {
//     return {
//         type: GET_TOKEN
//     };
// };
// export const getAuthError = () => {
//     return {
//         type: GET_AUTH_ERROR
//     };
// };
// export const signOut = () => {
//     return {
//         type: SIGNOUT
//     };
// };
