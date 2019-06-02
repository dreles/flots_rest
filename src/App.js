import React from 'react';
import NavBar from './NavBar'; 
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo'; 
import Footer from './Footer';

import './App.css';


function App() {
  return (
    <div>
      <NavBar></NavBar>
      <SectionOne></SectionOne>
      <SectionTwo></SectionTwo>
      <Footer></Footer>
    </div>
  );
}

export default App;
