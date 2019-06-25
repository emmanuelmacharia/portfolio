import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import './styles/index.css';



//COMPONENTS

import Header from './components/Header';
import BaseRoutes from './Routes';


function App() {
  return (
    <div>
      <Router>
        <Header />
        <BaseRoutes />
      </Router>
    </div>
  );
}

export default App;
