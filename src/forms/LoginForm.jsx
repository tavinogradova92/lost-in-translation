import React, { useState, useContext } from 'react';
import ErrorMessage from './ErrorMessage';
import { AppContext } from '../state/AppContext';

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

        <form>
          <label htmlFor="username">Username</label>
          <input 
            type="text"
            placeholder="What's your name?"
            onChange={ (e) => setUsername(e.target.value.trim()) }
          />
          <button 
            type="button"
            onClick={ onLoginClicked }>Login</button>
        </form>
      
      <ErrorMessage error={ loginError }/>

    </div>
  );
}

export default LoginForm;