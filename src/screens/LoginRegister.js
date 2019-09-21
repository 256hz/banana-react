import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return <div>
    <div className="title large-text">
      <br />
      I AM A<br />
      DONOR.<br />
    </div>
    <NavLink className="login-link" to="/login">
      <div className="title">REGISTER</div>
    </NavLink>
    <NavLink className="login-link" to="/login">
      <div className="title">LOGIN</div>
    </NavLink>
  </div>
}

export default Login