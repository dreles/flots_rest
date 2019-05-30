import React from 'react';

class NavBar extends React.Component {
	
	render() {
		return (
			<nav style={{background: "background-color: rgba(0,0,0,0) !important", textAlign: "justified" }} className="navbar navbar-expand-lg navbar-light ">
			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>
			  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
			    <div className="mx-auto navbar-nav">
			      <a className="nav-item nav-link px-5" href="#">HOME</a>
			      <p className="nav-seperator">.</p>
			      <a className="nav-item nav-link px-5" href="#">MENU</a>
		
			      <a className="navbar-brand m-0 px-5" href="#">Leslie's</a>

			      <a className="nav-item nav-link px-5" href="#">ORDER</a>
			       <p className="nav-seperator">.</p>
			      <a className="nav-item nav-link px-5" href="#">ABOUT</a>
			    </div>
			  </div>
			</nav>
		); 
	}

}

export default NavBar; 