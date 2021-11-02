import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Contenedor from './components/Contenedor'

const App = () => {

  return (
    <Router>

      <Contenedor />

    </Router>
  );
}

export default App;
