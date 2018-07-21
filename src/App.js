import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import  Header  from './components/Header' ;
import  Footer  from './components/Footer' ;
import  Home  from './components/Home' ;
import  News  from './components/News' ;
import  Login  from './components/Login' ;
import  Member  from './components/Member' ;
import Confirm_registrasi from './components/Confirm_registrasi';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <Route exact path="/" component={Home} />
          <Route path="/news" component={News} />
          <Route path="/login" component={Login} />
          <Route path="/member" component={Member} />
          <Route path="/confirm_registrasi/:_id/:pass" component={Confirm_registrasi} />
        <Footer />
      </div>
    );
  }
}

export default App;