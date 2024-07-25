import React, { useState } from 'react';
import Login from './components/Login';       // Ensure the path and casing are correct
import Register from './components/Register'; // Ensure the path and casing are correct
import './App.css';
import './styles.css';

const App = () => {
    const [isRegistered, setIsRegistered] = useState(true);
    const [user, setUser] = useState(null);

    const handleLogin = (credentials) => {
        // Handle login logic here
        console.log("Login credentials:", credentials);
        setUser({ email: credentials.email });
    };

    const handleRegister = (credentials) => {
        // Handle registration logic here
        console.log("Register credentials:", credentials);
        setIsRegistered(true);
    };

    return (
        <div className='wel'>
            <h1>{user ? `Welcome, ${user.email}` : "Please Login or Register"}</h1>
            {user ? (
                <button onClick={() => setUser(null)}>Logout</button>
            ) : (
                isRegistered ? (
                    <div>
                        <Login onLogin={handleLogin} />
                        <p>Don't have an account? <button onClick={() => setIsRegistered(false)}>Register</button></p>
                    </div>
                ) : (
                    <div>
                        <Register onRegister={handleRegister} />
                        <p >Already have an account? <button onClick={() => setIsRegistered(true)}>Login</button></p>
                    </div>
                )
            )}
        </div>
    );
};

export default App;

