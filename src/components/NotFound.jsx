import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
    return (
        <div className="errorPage">
            <div className="face">
	            <div className="band">
		            <div className="red"></div>
		            <div className="white"></div>
		            <div className="blue"></div>
	            </div>
	            <div className="eyes"></div>
	            <div className="dimples"></div>
	            <div className="mouth"></div>
            </div>

            <h1>Oops! Something went wrong!</h1>
            <Link to="/translation" className="btn">Return to Translation</Link>
        </div>
    )
}

export default NotFound;