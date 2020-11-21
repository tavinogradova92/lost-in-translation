import { useContext, useEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import NavBar from './components/NavBar';
import Translation from './components/Translation';
import Profile from './components/Profile';
import { AppContext } from './state/AppContext';
import NotFound from './components/NotFound';

function App() {

  const { username, setUsername, isLoggedIn, changeLoginStatus } = useContext(AppContext);

  useEffect(() => {
    const savedUsername = localStorage.getItem("userName");

    if(savedUsername) {
      setUsername(savedUsername);
  }
  }, [])

  const savedLoginStatus = localStorage.getItem("loginStatus");

  return (
    <BrowserRouter>
      <NavBar/>
      <main className="app">
        {savedLoginStatus !== 'true' && <Switch>
          <Route path="/login" component={Homepage}/>
          <Route path="*">
              <Redirect to="/login"/>
          </Route>
        </Switch>}
        {savedLoginStatus === 'true' && <Switch>
          <Route exact path="/login">
            <Redirect to ="/translation"/>
          </Route>
          <Route exact path="/translation" component={Translation}/>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/">
              <Redirect to="/translation"/>
          </Route>
          <Route path="*" component={NotFound} />
        </Switch>}
      </main>
    </BrowserRouter>
      
    
  );
}

export default App;
