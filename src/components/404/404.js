import React from 'react';
import './404.css'
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div className="notfound-container">
            <h1>404</h1>
            <Link to='/'><button>Back To Main</button></Link>
        </div>
    );
};

export default NotFound;