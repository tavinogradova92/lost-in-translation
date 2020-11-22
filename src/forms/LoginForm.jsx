import React, { useState, useContext } from 'react';
import ErrorMessage from './ErrorMessage';
import { AppContext } from '../state/AppContext';
import './LoginForm.css';
import icon from '../images/keyboard-icon.png';
import loginButton from '../images/login-button.png';

function LoginForm({ onSuccess }) {

  const { username, setUsername } = useContext(AppContext);
  const { isLoggedIn, changeLoginStatus } = useContext(AppContext);
  const [loginError, setLoginError ] = useState('');

  const onLoginClicked = () => {
    if (username !== null && username.length < 3) {
      setLoginError('Please, type a username with at least 3 letters.');
    } else if (username.length >= 3) {
      // store the username in the local storage
      localStorage.setItem('userName', username);
      changeLoginStatus(true);
      localStorage.setItem("loginStatus", true);
      onSuccess();
    }
  }

  return (
    <div className="loginForm">
      <img className="keyboard-icon" src={icon} alt="keyboard"/>
        <form className="form">
          <input 
            type="text"
            placeholder="What's your name?"
            onChange={ (e) => setUsername(e.target.value.trim()) }
          />
          <div 
            className="loginButton"
            onClick={ onLoginClicked }>
              <img src={loginButton} alt=""/>
          </div>
        </form>
      
      <ErrorMessage error={ loginError }/>

    </div>
  );
}

export default LoginForm;