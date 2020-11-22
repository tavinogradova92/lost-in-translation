import React, { useContext }  from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../state/AppContext';
import { Link } from 'react-router-dom';
import './NavBar.css';
import ProfileImage from '../images/ProfileImage.png';

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
      <Link to="/" className="h2">Lost In Translation</Link>
      {storedUsername !== null && storedLoginStatus === 'true' &&
        <div className="profile">
          <button className="profile-button" onClick={redirectToProfile}>
            {username} 
            <img src={ProfileImage} alt="profile"/>
          </button>
        </div>
      }
    </div>
  );
}


export default Navbar;