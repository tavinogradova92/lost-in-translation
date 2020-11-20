import React, { useContext }  from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../state/AppContext';

function Navbar() {

  const { username, isLoggedIn } = useContext(AppContext);

  let storedUsername = localStorage.getItem("userName");
  let storedLoginStatus = localStorage.getItem("loginStatus");
  
  const history = useHistory();

  function redirectToProfile() {
    history.push('/profile');
  }

  return (
    <div className="navBar">
      Lost In Translation
      {storedUsername !== null && storedLoginStatus === 'true' &&
        <div className="container">
          <img src="https://www.pngitem.com/pimgs/m/87-877270_logo-icon-profile-png-transparent-png.png" alt="profile"/>
          <button onClick={redirectToProfile}>{username}</button>
        </div>
      }
    </div>
  );
}


export default Navbar;