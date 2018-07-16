import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import  Header  from './components/Header' ;
import  Footer  from './components/Footer' ;
import  Home  from './components/Home' ;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

          <Route exact path="/" component={Home} />
        
        <Footer />
      </div>
    );
  }
}

export default App;