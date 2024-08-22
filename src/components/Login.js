import React, { useState } from 'react';
import './Login.css';

const Login = () => {
 

  return (
    <div className="login-container">
    
    
    <form action="#" className="login-form">
        <p>Enter Email :</p>
      <input type="email" placeholder="Email address" icon="mail" />
      <p>Enter Password :</p>
      <input type="password" placeholder="Password" icon="lock" />
      
      <button type="submit" className="login-button">Log In</button>
    </form>
    <p className="signup-prompt">
      Don&apos;t have an account? <a href="#" className="signup-link">Sign up</a>
    </p>
  </div>
  );
};

export default Login;
