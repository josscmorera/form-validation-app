import React, { useState } from 'react';

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = function (e) {
        e.preventDefault();

        let isNameEmpty = name === '';
        let isEmailEmpty = email === '';
        let isPasswordEmpty = password === '';

        if (isNameEmpty || isEmailEmpty || isPasswordEmpty) {
            setErrorMessage('Please fill in all fields.');
            return;
        }

        let isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (!isEmailValid) {
            setErrorMessage('Please enter a valid email address.');
            return;
        }

        let isPasswordLengthValid = (password.length >= 6) && (password.length <= 12);
        if (!isPasswordLengthValid) {
            setErrorMessage('Password should be between 6-12 characters long.');
            return;
        }

        setErrorMessage('');
        setSuccessMessage('Form submitted successfully!');
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        </div>
    );
};

export default Form;