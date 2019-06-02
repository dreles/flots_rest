import React from 'react';

const Footer = () => {
	return (
		<div id="footer" className="row">
      
	        <div className="col"><a className="navbar-brand m-0 px-5" href="#">Leslie's</a></div>
	        <div style={{marginTop: "2%"}}className="col-md-4 col-sm-12"> <p>Subscribe for deals, offers, and upcoming events!</p> </div>
	        <div className="col"> 
	          <div className="row">
	            <div className="col"><a href="">. Home</a></div>
	            <div className="col"><a href="">. Order</a></div>
	            <div className="col"><a href="">. Location</a></div>
	          </div> 
	          <div className="row">
	            <div className="col"><a href="">. Menu</a></div>
	            <div className="col"><a href="">. Catering</a></div>
	            <div className="col"><a href="">. About</a></div>
	          </div> 
	        </div>
	 
	    </div>
	); 
}

export default Footer; 