import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import  Header  from './components/Header' ;
import  Footer  from './components/Footer' ;
import  Home  from './components/Home' ;
import  News  from './components/News' ;
import  Login  from './components/Login' ;
import  Member  from './components/Member' ;
import Confirm_registrasi from './components/Confirm_registrasi';
import  Cart  from './components/Cart' ;
import  Shop  from './components/Shop' ;
import  Store  from './components/Store' ;
import  Film  from './components/Film' ;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <Route exact path="/" component={Home} />
          <Route path="/news" component={News} />
          <Route path="/login" component={Login} />
          <Route path="/member" component={Member} />
          <Route path="/cart" component={Cart} />
          <Route path="/shop" component={Shop} />
          <Route path="/store" component={Store} />
          <Route path="/film" component={Film} />
          <Route path="/confirm_registrasi/:_id/:pass" component={Confirm_registrasi} />
        <Footer />
      </div>
    );
  }
}

export default App;