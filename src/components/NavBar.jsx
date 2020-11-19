/* eslint-disable no-undef */
import React from 'react';
import { useHistory } from 'react-router-dom';

function Navbar() {
  
  const history = useHistory();

  const username = localStorage.getItem('userName');

  function handleSuccessfulLogin() {
    history.push('/profile');
  }

  return (
    <div className="navBar">
      Lost In Translation
      {username !== null &&
        <div className="container">
          <img src="https://www.pngitem.com/pimgs/m/87-877270_logo-icon-profile-png-transparent-png.png" alt="profile"/>
          <button onClick={handleSuccessfulLogin}>{username}</button>
        </div>
      }
    </div>
  );
}


export default Navbar;