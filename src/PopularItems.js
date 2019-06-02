import React from 'react';

class PopularItems extends React.Component {
	renderItems(items){
		return items.map(item => {
			return (
				<div id={`item${item.id}`} onMouseEnter={ () => {this.addClass(item.id)} } onMouseLeave={() => {this.removeClass(item.id)}} key={item.id} className="row popular-item"> 
					<div className="col-8"><p style={{padding: "5% 0px 5% 0px", margin: "0px", textAlign: "left"}}className="greeting">{item.name}</p></div>
		          	<div className="col-2"></div>
	          		<div id="end-game" className="col-2 button-end align-self-end"><i style={{color: "black", fontSize: "20px", paddingTop: "15%"}} className="fas fa-shopping-cart"></i></div>

		         </div> 
			); 
		})
	}

	addClass = (id) => {
		document.getElementById(`item${id}`).classList.add("active")		
	}

	removeClass = (id) => {
		document.getElementById(`item${id}`).classList.remove("active")
	}


	render(){
		return(
			<div id="popular-items" className="row">
				<h1 style={{margin: "auto", paddingTop: "200px", paddingBottom: "30px"}}className="row greeting">Genuine Belizean Cuisine: </h1>
				{this.renderItems(this.props.items)}
			</div>
		); 
	}

}

export default PopularItems; 