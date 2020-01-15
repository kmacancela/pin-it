import { returnErrors } from './errorActions';

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from './types';

export const register = ({ first_name, last_name, email, password }) => dispatch => {
  console.log("hits inside authActions")
  fetch("http://localhost:3000/users", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ first_name, last_name, email, password })
  })
  .then(r => {
    if (r.ok) {
      return r.json()
    } else {
      console.log("r", r)
      // throw new Error(r)
    }
  })
  .then(res =>{
    console.log("register res:", res);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res
    })

  })
  // .catch(err => {
  //   console.log("register error:", {err})
  //   dispatch(returnErrors(err.statusText, err.status, 'REGISTER_FAIL'))
  //   dispatch({
  //     type: REGISTER_FAIL
  //   })
  // })
}

////////////
// LOGIN
export const login = ({email, password}) => dispatch => {
  return fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({ email, password })
  })
  .then(r => r.json())
  .then(res => {
    console.log("inside getToken: ", res.token)
    localStorage.token = res.token
    localStorage.user_id = res.user_id
    dispatch({
      type: USER_LOADED,
      payload: res
    })

    fetch(`http://localhost:3000/users/${res.user_id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': res.token
      }
    })
    .then(r => r.json())
    .then(user => {
      console.log("user: ", user)
      // localStorage.setItem('user', JSON.stringify(user))
      dispatch({
        type: LOGIN_SUCCESS,
        payload: user
      })
    })
  })
}

//////////////
// Logout User
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  };
}
