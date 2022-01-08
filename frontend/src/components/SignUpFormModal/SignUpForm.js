import React, { useState } from "react";
import { useDispatch, } from "react-redux";
import * as sessionActions from "../../store/session";
import './SignUpForm.css';

function SignupForm() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);


    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors([]);
            return dispatch(sessionActions.signup({ email, username, password }))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                });
        }
        return setErrors(['Passwords must match']);
    };

    return (
        <form className='signupform' onSubmit={handleSubmit}>
            <ul className="errors">
                {errors.map((error, idx) => <li className='errors' key={idx}>{error}</li>)}
            </ul>
            <h1 className='signuptext'>Create An Account</h1>
            <label>
                <input
                    placeholder="Email"
                    className='signupinput'
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </label>
            <label>
                <input
                    placeholder="Username"
                    className='signupinput'
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </label>
            <label>
                <input
                    placeholder="Password"
                    className='signupinput'
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </label>
            <label>
                <input
                    placeholder="Confirm Password"
                    className='signupinput'
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
            </label>
            <button className='signupbutton' type="submit">Sign Up</button>
        </form>
    );
}

export default SignupForm;
