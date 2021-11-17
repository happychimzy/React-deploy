
import React from 'react';
import {Route, Routes } from 'react-router';
import { BrowserRouter as Router,} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Characters from'./components/Characters';
import Planets from './components/Planets';

const App = () => {
  return (
    <Router>
      <div className = "px-5">
        <h1 className = "fw-bold text-dark"> Spacious</h1>
        <Header />
        <Routes>
          <Route exact path='/' element={<Planets />} />
          <Route exact path ='/character' element={<Characters/>}/>
          </Routes>
      </div>

      </Router>
      
  );
  
}



export default App;