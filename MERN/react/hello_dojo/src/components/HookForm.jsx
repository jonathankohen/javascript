import React, { useState } from 'react';

const HookForm = () => {
    const [user, setUser] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        c_password: '',
    });
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleUser = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
        if (user.first_name.length < 2) {
            setFirstNameError('First name must be at least 2 characters');
        } else {
            setFirstNameError('');
        }
        if (user.last_name.length < 2) {
            setLastNameError('Last name must be at least 2 characters');
        } else {
            setLastNameError('');
        }
        if (user.email.length < 5) {
            setEmailError('Email must be at least 5 characters');
        } else {
            setEmailError('');
        }
        if (user.password.length < 8) {
            setPasswordError('Password must be at least 8 characters');
        } else {
            setPasswordError('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            c_password: '',
        });
    };

    return (
        <>
            <form className="col-5 mx-auto my-5" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>First Name:</label>
                    <input
                        className="form-control"
                        type="text"
                        name="first_name"
                        value={user.first_name}
                        onChange={handleUser}
                    />
                    {firstNameError ? (
                        <p style={{ color: 'red' }}>{firstNameError}</p>
                    ) : null}
                </div>
                <div className="form-group">
                    <label>Last Name:</label>
                    <input
                        className="form-control"
                        type="text"
                        name="last_name"
                        value={user.last_name}
                        onChange={handleUser}
                    />
                    {lastNameError ? (
                        <p style={{ color: 'red' }}>{lastNameError}</p>
                    ) : null}
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        className="form-control"
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleUser}
                    />
                    {emailError ? (
                        <p style={{ color: 'red' }}>{emailError}</p>
                    ) : null}
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        className="form-control"
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleUser}
                    />
                    {passwordError ? (
                        <p style={{ color: 'red' }}>{passwordError}</p>
                    ) : null}
                </div>
                <div className="form-group">
                    <label>Confirm Password:</label>
                    <input
                        className="form-control"
                        type="password"
                        name="c_password"
                        value={user.c_password}
                        onChange={handleUser}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Build
                </button>
            </form>

            <div className="col-5 mx-auto my-5">
                <h5>Your Form Data</h5>
                <p>First Name: {user.first_name}</p>
                <p>Last Name: {user.last_name}</p>
                <p>Email: {user.email}</p>
                <p>Password: {user.password}</p>
                <p>Confirm Password: {user.c_password}</p>
            </div>
        </>
    );
};

export default HookForm;
