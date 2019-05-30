import React from 'react';

const SectionOne = () => {
	return(
		 <div style={{marginTop: "100px"}} id="section1" >  
	      <div className="row">
	        <div className="col-8">
	           <img style={{marginLeft: "20em", height: "700px"}}id="main-image"src={require('./images/bMap.png')} alt="food"/>
	        </div>
	        <div className="col">
	          <h1 className="greeting" style={{fontSize: "100px"}}>It's that simple.</h1>
	          <h5 className="sub-greeting">FEATURING OUR NEW SPRING SPECIALS!</h5>
	          <div style={{textAlign: "center", width: "100%", padding: "0px", height: "50px", margin: "auto"}}className="btn">
	            <p style={{margin: "0px", paddingTop: "10%"}}>Details</p>
	            <div className="button-end" style={{paddingTop: "20%"}}>
	              <i className="fas fa-arrow-right"></i>
	            </div>
	          </div>

	        </div>
	      </div>
	      
	      <div id="popular-items" className="row">
	        <h1 style={{margin: "auto", paddingTop: "200px", paddingBottom: "30px"}}className="row greeting">Genuine Belizean Cuisine: </h1>
	        <div className="row popular-item">
	          <div className="col"><p style={{padding: "5% 0px 5% 0px", margin: "0px", textAlign: "left"}}className="greeting">Rice and Beans & Chicken</p></div>
	          <div className="col"><p className="popular-desc"> Stew Chicken, Rice, Pinto Beans, Coconut Milk</p></div>
	          
	        </div>
	        <div className="row popular-item active">
	          <div className="col-5"> <p style={{padding: "5% 0px 5% 0px", margin: "0px", textAlign: "left"}}className="greeting">Garnaches</p></div>
	          <div className="col-5"><p className="popular-desc"> Refried Beans, Fried Tortilla, Ketchup</p></div>
	          <div className="col-2 button-end align-self-end"><i style={{color: "black", fontSize: "20px", paddingTop: "15%"}} class="fas fa-shopping-cart"></i></div>
	          
	        </div>

	        <div className="row popular-item">
	          <div className="col"><p style={{padding: "5% 0px 5% 0px", margin: "0px", textAlign: "left"}}className="greeting">Salbutes</p></div>
	          <div className="col"><p className="popular-desc"> Fried Tortilla, chicken, tomatoes, pickled cabbage, onions</p></div>
	          
	        </div>
	      </div>
	    </div>
	); 
}

export default SectionOne;