

import './Login.css';
import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
// import alertContext from './AlertContext';

const Login = () => {
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
   
    const validateLogin = () => {
        let errors = {};
       
        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!email) {
            errors.email = "Required";
        } else if (!email.match(validRegex)) {
            errors.email = "Enter valid email";
        }

        if (!password) {
            errors.password = "Required";
        } else if (password.length > 25) {
            errors.password = "Must be 25 characters or less";
        } else if (password.length < 5) {
            errors.password = "Must be 5 characters or more";
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

   

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateLogin()) {
            try {
                const response = await axios.post('http://localhost:5000/login', { email, password });
                localStorage.setItem('token', response.data.token);
                alert('Login successful');
            } catch (error) {
                alert('Invalid credentials');
            }
        }
    };

  return (
    <div className="login-container">
    
    <form onSubmit={handleSubmit}  className="login-form">
    <div className="mb-3"> 
        <p>Enter Email :</p>
      <input 
         type="email"
         id="loginEmail"
         placeholder="Email address"
         icon="mail" 
         onChange={(e) => setEmail(e.target.value)}
      />
       {errors.email && <p className="error">{errors.email}</p>}
    </div>
   <div className="mb-3">
      <p>Enter Password :</p>
      <input 
         type="password" 
         id="loginPassword" 
         placeholder="Password" 
         icon="lock" 
         onChange={(e) => setPassword(e.target.value)}
      />
       {errors.password && <p className="error">{errors.password}</p>}
    </div>
      <button type="submit" className="login-button">Log In</button>
    </form>
    <p className="signup-prompt">
      Don&apos;t have an account? <Link to="/Signup" className="signup-link">Sign up</Link>
     
    </p>
  </div>
  );
};

export default Login;
