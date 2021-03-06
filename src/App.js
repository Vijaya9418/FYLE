import logo from './logo.svg';
import './App.css';
import Navbar from './components/nav/Navbar'
import Home from './components/Home'
import Fav from './components/fav'
import Bank from './components/bank'
import {BrowserRouter as Router} from 'react-router-dom'
import {Route,Switch} from 'react-router-dom'
import About from './components/About'
import React, { Component } from 'react'

function App() {
  return (
    <div className="App">
      <Router>
     <Navbar/>
     <Route exact path='/'> <Home/>  </Route>
     <Route exact path='/about'> <About/>  </Route>
     <Route exact path='/favorite'> <Fav/>  </Route>
     <Route path= "/bank/:id" component={Bank}></Route>
     
     </Router>
    </div>
  );
}

export default App;
