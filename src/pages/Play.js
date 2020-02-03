import React from 'react'
import Menu from '../componentes/Menu'
import Footer from '../componentes/Footer'
import Reproductor from '../componentes/Reproductor'
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


		return (


				<div>

					<Menu />
					
					<div className='container'> 

						<div className='row'>

							<div className='col-md-6'>
								<h2>Haz click y disfruta de la peli</h2>
							</div>

							<div className='col-md-6'>
								<Link to="/pelis" className='btn btn-primary'> Return </Link> 
								<button className='btn btn-primary' onClick= {this.Event} > Event </button>
							</div>
							
						</div>
					</div>

					<Reproductor />

					<Footer />


				</div>





			)
	}
}


export default Play