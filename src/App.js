import React from 'react';
import {
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import './App.css';
import PageData from './Pages/PageData';
import PageNamber from './Pages/PageNumber';
import PageYear from './Pages/PageYear';
import Home from './Pages/Home';

function App() {
  return (
    <div className="container">

    <div className="nav">
    <NavLink to={'/data'} >data</NavLink>
    <NavLink to={'/number'} >number</NavLink>
    <NavLink to={'/year'} >year</NavLink>
    </div>
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/data" element={<PageData />} />
        <Route path="/number" element={<PageNamber />} />
        <Route path="/year" element={<PageYear />} />
    </Routes>

    </div>
  );
}

export default App;
