import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './pages/Home'
import Search from './pages/Search'
import Visit from './pages/Visit'
import Register from './pages/Register'

import './assets/styles/global.css'

function App() {
  return (
    <Router>
      <Route path='/' component={Home} exact />
      <Route path='/buscar' component={Search} exact />
      <Route path='/visitar/:id' component={Visit} exact />
      <Route path='/cadastrar' component={Register} exact />
    </Router>
  );
}

export default App;
