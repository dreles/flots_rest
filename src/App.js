import React from 'react';
import NavBar from './NavBar'; 


import './App.css';


function App() {
  return (
    <div>
    <NavBar></NavBar>
    <div style={{marginTop: "100px"}} id="section1" className="container">  
      <div className="row">
        <div className="col-8">
           <img style={{marginRight: "30em"}}id="main-image"src={require('./images/main_food.png')} alt="food"/>
        </div>
        <div className="col">
          <h1 className="greeting" style={{fontSize: "100px"}}>It's that simple.</h1>
          <h5 className="sub-greeting">FEATURING OUR NEW SPRING SPECIALS!</h5>
          <div style={{textAlign: "center", width: "100%", padding: "0px", height: "50px"}}className="btn">
            <p style={{margin: "0px", paddingTop: "10%"}}>Details</p>
            <div style={{backgroundColor: "yellow", paddingTop: "20%"}}>
              <i class="fas fa-arrow-right"></i>
            </div>
          </div>

        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
