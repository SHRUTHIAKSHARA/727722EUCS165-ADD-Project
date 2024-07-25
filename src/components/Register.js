import React, { useState } from 'react';

const Register = ({ onRegister }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        let formErrors = {};

        if (!email) {
            formErrors.email = 'Email is required';
        }

        if (!password) {
            formErrors.password = 'Password is required';
        }

        if (password !== confirmPassword) {
            formErrors.confirmPassword = 'Passwords do not match';
        }

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
        } else {
            setErrors({});
            onRegister({ email, password });
        }
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    {errors.email && <div className="error">{errors.email}</div>}
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {errors.password && <div className="error">{errors.password}</div>}
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
                </div>
                <button type="submit" className="register-button">Register</button>
            </form>
        </div>
    );
};

export default Register;
