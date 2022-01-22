import './App.css';
import React,{useContext} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Updateprofile from './components/Updateprofile';
import AutharizeHeader from './components/Header/AutharizeHeader';
import Firstpage from './components/firstpage';




function App() {

  return (
    <Router>
      <div>
        <Route path="/public" component={Header}/>
        <Route path="/user" component={AutharizeHeader}/>
        <Route path="/public/login" component={Login}/>
        <Route path="/public/register" component={Register}/>
        <Route path="/user/profile" component={Profile}/>
        <Route path="/user/update/:id" component={Updateprofile}/>
        <Route path="/" exact component={Firstpage}/>
      </div>
    </Router>
    
  );
}

export default App;
