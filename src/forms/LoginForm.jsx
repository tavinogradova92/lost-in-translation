import React, { useEffect, useState } from 'react';
import ErrorMessage from './ErrorMessage';

function LoginForm({ onSuccess }) {

  const [ username, setUsername ] = useState(null);
  const [loginError, setLoginError ] = useState('');

  useEffect( () => {
    if (username !== null && username.length < 3) {
        setLoginError('Please, type a username with at least 3 letters.');
      } else {
        setLoginError("");
      }
  }, [username]);

  const onLoginClicked = () => {
    if (username.length >= 3) {
        // store the username in the local storage
        localStorage.setItem('userName', username);
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