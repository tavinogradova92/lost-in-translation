import React from 'react';
import logo from '../images/Logo.png';
import LoginForm from '../forms/LoginForm';
import './Homepage.css';
import { useHistory } from 'react-router-dom';

function Homepage() {

  const history = useHistory();

  function handleSuccessfulLogin() {
    history.push('/translation');
  }

  return (
    <div className="homePage">
      <div className="header">
        <img className="main-image" src={logo} alt="smiling robot"/>
        <div className="titles">
          <h1>Lost in Translation</h1>
          <h2>Get started</h2>
        </div>
      </div>
    
      <LoginForm className="loginForm" onSuccess={ handleSuccessfulLogin }/>

    </div>
  );
}

export default Homepage;