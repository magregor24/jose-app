import React from 'react'
import './estilos/Card.css'
import { Link } from 'react-router-dom'

class Card extends React.Component {

	 state = {pelis:[]}

	 async componentDidMount(){
	 	await fetch("http://portend.com.ve/api_camico/document.php")
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
				  	this.state.pelis.map((ele) =>{

				  		return(
				  				<div className="card card2" key={ele.id}>
				  					
								  <div className="card-body">
								    <h5 className="card-title title">{ele.nombre}</h5>
								    <img src={ele.img} className="img-thumbnail" alt="" />
								    <Link to={'/play/'+ele.nombre} className="btn btn-primary card-link mt-4">Ver Pelicula</Link>
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