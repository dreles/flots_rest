import React from 'react'; 


const SectionTwo = () => {
	return(
		<div id="section2">
	      <div style={{marginLeft: "0px", marginRight: "0px", marginTop: "80px"}} className="row">
	            <div style={{textShadow: '4px 1px 20px black'}} className="col-lg-6 special-offer" >
	              <div className="row" style={{color: "#C1D6BF"}}>Special Offer</div>
	              <div className="row"> <h1 style={{color: "white"}}>Spicy Beef Noodle</h1> </div>
	              <div className="row" style={{fontSize: "12px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien et ligula ullamcorper malesuada. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. In tellus integer feugiat scelerisque varius morbi enim nunc faucibus.</div>
	              <div className="row" style={{color: "#C1D6BF"}}><h1>$13</h1></div>
	              <div className="row">
	                <div style={{textAlign: "center", width: "100%", padding: "0px", height: "50px", }}className="btn">
	                  <p style={{margin: "0px", paddingTop: "10%"}}>Details</p>
	                  <div className="button-end" style={{paddingTop: "20%"}}>
	                    <i className="fas fa-arrow-right"></i>
	                  </div>
	                </div>
	              </div>
	            </div>
	            <div className="col-5" style={{paddingLeft: "0px"}}>
	              <img className="scroll-image" src={require('./images/bFood1.jpg')} alt=""/>
	            </div>
	          </div>
	        
	    </div>

	); 
}

export default SectionTwo; 