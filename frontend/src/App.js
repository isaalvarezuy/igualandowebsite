import React from 'react'
import './App.css';
import { Provider } from "react-redux";
import { store } from './store/store'
import { BrowserRouter as Router } from 'react-router-dom'
import Contenedor from './components/Contenedor'


const App = () => {

  return (
    <Provider store={store} >
      <Router>
        <Contenedor />
      </Router>
    </Provider >
  );
}

export default App;
