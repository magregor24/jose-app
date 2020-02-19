import React from 'react'
import './estilos/Footer.css'


class Footer extends React.Component {

	render(){

		return (

			<div className="footer">
		
				<div className='row'> 

					<div className='col-md-6'>
						<h5 className="text-uppercase font-weight-bold">Footer text 1</h5>
				        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita sapiente sint, nulla, nihil
				          repudiandae commodi voluptatibus corrupti animi sequi aliquid magnam debitis, maxime quam recusandae
				          harum esse fugiat. Itaque, culpa?
				        </p>
					</div> 

					<div className='col-md-6'>
						<h5 className="text-uppercase font-weight-bold">Footer text 2</h5>
				        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio deserunt fuga perferendis modi earum
				          commodi aperiam temporibus quod nulla nesciunt aliquid debitis ullam omnis quos ipsam, aspernatur id
				          excepturi hic.
				        </p>
					</div> 
				</div>

				<div className="footer-copyright text-center py-3 bg-primary">© 2020 Copyright:
					<h3>by José Mendoza</h3>
				</div>

			</div>

		)
	}
}


export default Footer