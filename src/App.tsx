import React from 'react';
import './styles/global.css';
import Container from './components/layout/Container'
import Header from './components/layout/Header'
import {Outlet} from "react-router-dom";

function App() {
  return (
    
     <>
     <Outlet/> 
     <Header/>
     <Container/>
     </>

  );
}

export default App;
