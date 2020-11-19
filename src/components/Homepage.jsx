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
    <div className="container">

      <header>
        <img src={logo} alt="smiling robot"/>
        <h1>Lost in Translation</h1>
        <h2>Get started</h2>
      </header>

      <LoginForm onSuccess={ handleSuccessfulLogin }/>

    </div>
  );
}

export default Homepage;