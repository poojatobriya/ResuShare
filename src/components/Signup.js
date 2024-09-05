import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const [errors, setErrors] = useState({});

    const validate = () => {
        let errors = {};
        if (!email) {
            errors.email = "Required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            errors.email = "Invalid email address";
        }
        if (!password) {
            errors.password = "Required";
        } else if (password.length > 25) {
            errors.password = "Must be 25 characters or less";
        } else if (password.length < 5) {
            errors.password = "Must be 5 characters or more";
        }
        if (!confirmpassword) {
            errors.confirmpassword = "Required";
        } else if (password !== confirmpassword) {
            errors.confirmpassword = "Password did not match";
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    // const handleSubmit = async () => {
    //     console.log("signup hogya h");
    //     // Your signup logic here
    // };

    const handleSubmit = async () => {
        if (validate()) {
            try {
                const response = await axios.post('http://localhost:5000/signup', { email, password });
                alert('Signup successful');
            } catch (error) {
                alert('Error during signup');
            }
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={(e) => { e.preventDefault(); if (validate()) { handleSubmit(e); } }} className="login-form">
                <div className="mb-3">
                    <p>Enter Email :</p>
                    <input
                        type="email"
                        id="email"
                        className="signup form-control"
                        name="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>

                <div className="mb-3">
                    <p>Enter Password :</p>
                    <input
                        type="password"
                        id="password"
                        className="signup form-control"
                        name="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>

                <div className="mb-3">
                    <p>Confirm Password :</p>
                    <input
                        type="password"
                        id="confirmpassword"
                        className="signup form-control"
                        name="confirmPassword"
                        placeholder="Confirm password"
                        value={confirmpassword}
                        onChange={(e) => setConfirmpassword(e.target.value)}
                    />
                    {errors.confirmpassword && <p className="error">{errors.confirmpassword}</p>}
                </div>

                <button type="submit" className="login-button">Signup</button>
            </form>
        </div>
    );
};

export default Signup;

