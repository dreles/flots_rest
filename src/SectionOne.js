import React from 'react';
import PopularItems from './PopularItems'; 

const popularItems = [
	{
		name: "Rice, Beans, and Chicken", 
		desc: "Stew Chicken, Rice, Pinto Beans, Coconut",
		id: 1
		
	},{
		name: "Garnaches",
		desc: "Refried Beans, Fried Tortilla, Ketchup",
		id: 2
	},{
		name: "Salbutes",
		desc: "Fried Tortilla, chicken, tomatoes, pickled",
		id: 3
	}
]

const SectionOne = () => {
	return(
		 <div style={{marginTop: "100px"}} id="section1" >  
	      <div className="row">
	        <div className="col-8">
	           <img className="background-image" id="main-image"src={require('./images/bMap.png')} alt="food"/>
	        </div>
	        <div className="col">
	          <h1 className="greeting" style={{fontSize: "100px"}}>It's that simple.</h1>
	          <h5 className="sub-greeting">FEATURING OUR NEW SPRING SPECIALS!</h5>
	          <div className="btn my-btn">
	            <p style={{margin: "0px", paddingTop: "10%"}}>Details</p>
	            <div className="button-end" style={{paddingTop: "20%"}}>
	              <i className="fas fa-arrow-right"></i>
	            </div>
	          </div>

	        </div>
	      </div>
	      <PopularItems items={popularItems}></PopularItems>
	     
	    </div>
	); 
}

export default SectionOne;