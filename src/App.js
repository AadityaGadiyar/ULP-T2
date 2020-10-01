import React, { useEffect, useState } from 'react';
import './App.css';
import Login from "./Login";
import { getTokenFromUrl } from './spotify'
import axios from 'axios';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Albums from './Albums';
import Artists from './Artists';
import Genres from './Genres'



function App() {
  const [token, setToken] = useState(null);
  
  useEffect(() => {

    const _token = getTokenFromUrl()
    // window.location.hash = "";

    if (_token) {
      setToken(_token);
      // console.log(_token);
    }
    
    // axios({
    //   method: "GET",
    //   url: "https://api.spotify.com/v1/me/following?type=artist&limit=20",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${_token}`
    //   }
    // }).then(res => console.log(res.data))
  },[]);

  

  return (
    <Router>
      <div className="App">
        <Navbar/>
        
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/albums" exact component={Albums} />
          <Route path="/artists" exact component={Artists} />
          <Route path="/genres" exact component={Genres} />
        </Switch>
       
      </div>
    </Router>
  );
}

export default App;
