import React from 'react';
import { Route, BrowserRouter } from "react-router-dom"
import Title from './screens/Title'
import LoginRegister from './screens/LoginRegister'
import Register from './screens/Register'
import Login from './screens/Login'
import HomeScreen from './screens/HomeScreen'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <div className="Screen">
            <Route exact path="/"                   component={Title}/>
            <Route exact path="/loginregister"      component={LoginRegister}/>
            <Route exact path="/login"              component={Login}/>
            <Route exact path="/register"           component={Register}/>
            <Route exact path="/home"               component={HomeScreen}/>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
