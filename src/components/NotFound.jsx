import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
    return (
        <div class="errorPage">
            <div class="face">
	            <div class="band">
		            <div class="red"></div>
		            <div class="white"></div>
		            <div class="blue"></div>
	            </div>
	            <div class="eyes"></div>
	            <div class="dimples"></div>
	            <div class="mouth"></div>
            </div>

            <h1>Oops! Something went wrong!</h1>
            <Link to="/translation" class="btn">Return to Translation</Link>
        </div>
    )
}

export default NotFound;