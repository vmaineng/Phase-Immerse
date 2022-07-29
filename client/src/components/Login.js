import React from 'react'
import {useDispatch} from "react-redux";
import {login, logout} from '../features/user';

function Login() {
    const dispatch = useDispatch();

  return (
    <div>Login
        <button onClick={() => { 
            dispatch(login({name: "", email: ""}))}}>
                Login
            </button>

            <button 
            onClick={() => {
                dispatch(logout())
            }}> Logout</button>
    </div>
  )
}

export default Login