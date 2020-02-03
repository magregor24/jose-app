import React from 'react'
import './estilos/Card.css'
import { Link } from 'react-router-dom'

class Card extends React.Component {

	 state = {pelis:[]}

	 async componentDidMount(){
	 	await fetch("http://localhost/API/document.php")
	 	.then(js => js.json())
	 	.then(ele =>{
	 		let pelis = ele
	 		this.setState({pelis})
	 	})
	 }
      
     
	
	render(){

		return (

				<div className='container'>
	 

				  {
				  	this.state.pelis.map(ele =>{
				  		
				  		return(
				  				<div className="card card2">
								  <div className="card-body">
								    <h5 className="card-title title">{ ele.nombre}</h5>
								    <img src={ele.img} className="img-thumbnail"/>
								    <Link to="/play" className="btn btn-primary card-link mt-4">Ver Trailer</Link>
								   </div>

								</div>
							   )
				  	})

				  }
				  
				</div>

			

			    )
	}

}
	
export default Card