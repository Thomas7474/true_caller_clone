import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ResponsiveAppBar from './components/navbar';
import Login from './components/login';
import ThreeScene from './components/threedim';
import Signup from "./components/signup";
import Search from "./components/search";
import { Outlet } from 'react-router-dom';

function App(){

  return(
    <>
    <Outlet/>
    </>
  );

}

export default App