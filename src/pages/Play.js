import React from 'react'
import Menu from '../componentes/Menu'
import Footer from '../componentes/Footer'
//import Reproductor from '../componentes/Reproductor'
import { Link } from 'react-router-dom'


class Play extends React.Component {

	constructor(props){

		super(props)
		this.Event = this.Event.bind(this)
	}

	Event(){

		alert('id peli')
	}

	render(){

		const {match} = this.props;

		return (

				<div style={{backgroundImage:'linear-gradient(to left, #2A3744, #423143)'}} >

					<Menu />
					
					<div className='container'> 

						<div className='row'>

							<div style={{color:'white'}} className='col-md-6'>
								<h2>Haz click y disfruta de la peli {match.params.nombre} </h2>
								<video width='500' height='300' controls>

									<source src={`http://localhost/FrameJose/videos/${match.params.nombre}.mp4`} type="video/mp4" />

								 </video>
							</div>

							<div className='col-md-6'>
								<Link to="/pelis" className='btn btn-primary'> Volver al menu </Link> 
								<button className='btn btn-primary' onClick= {this.Event} > Event </button>
							</div>
							
						</div>

					</div>

			
				
					<Footer />


				</div>





			)
	}
}


export default Play