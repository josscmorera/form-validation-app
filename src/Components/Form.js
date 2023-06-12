import React, { useState } from 'react';

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleNameChange = (e) => {
        const value = e.target.value;
        setName(value);

        if (!value) {
            setNameError('Name is required.');
        } else if (!/^[a-zA-Z\s]*$/.test(value)) {
            setNameError('Only letters are allowed in the name field.');
        } else {
            setNameError('');
        }
    };


    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setEmailError(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Invalid email address.');
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        if (!value) {
            setPasswordError('Password is required.');
        } else if (value.length < 6 || value.length > 12) {
            setPasswordError('Password should be between 6-12 characters long.');
        } else {
            setPasswordError('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (nameError || emailError || passwordError) {
            setErrorMessage('Please fix the input errors before submitting.');
            return;
        }

        setErrorMessage('');
        setSuccessMessage('Form submitted successfully!');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={handleNameChange} /><br />
                {nameError && <p style={{ color: 'red' }}>{nameError}</p>}
                <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} /><br />
                {emailError && <p style={{ color: 'red' }}>{emailError}</p>} 
                <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} /><br />
                {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
                <button type="submit">Submit</button>
            </form>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        </div>
    );
};

export default Form;