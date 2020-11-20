import { useContext, useEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import NavBar from './components/NavBar';
import Translation from './components/Translation';
import Profile from './components/Profile';
import { AppContext } from './state/AppContext';

function App() {

  const { username, setUsername } = useContext(AppContext);

  useEffect(() => {
    const savedUsername = localStorage.getItem("userName");

    if(savedUsername) {
      setUsername(savedUsername);
  }
  }, [])

  return (
    <BrowserRouter>
      <NavBar/>
      <main className="app">
        <Switch>
          <Route path="/login" component={Homepage}/>
          <Route path="/translation" component={Translation}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/">
              <Redirect to="/login"/>
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
      
    
  );
}

export default App;
