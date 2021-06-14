import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Card from './components/Card';
import UserCard from './components/UserCard';
import Users from './components/Users';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/users" component={Users}/>
          <Route path="/user/:username" component={UserCard}/>
          <Route path="/:user" component={Card}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
