import React from 'react'
import './estilos/Menu.css'
import { Link } from 'react-router-dom'



const Menu = () => (

	<div>
	    <nav className="navbar navbar-expand-lg menu shadow-lg p-3 mb-5">
		  <h1 className="navbar-brand">MCpelis </h1>
		  
		  <div className="collapse navbar-collapse" id="navbarSupportedContent">
		    <ul className="navbar-nav mr-auto">
		      <li className="nav-item active">
		        <Link to="/pelis" className="nav-link">Home <span className="sr-only">(current)</span></Link>
		      </li>
		      <li className="nav-item">
		        <a className="nav-link" href='...'>News</a>
		      </li>
		      <li className="nav-item dropdown">
		        
		        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
		          <a className="dropdown-item" href='...'>Action</a>
		          <button className="dropdown-item">Another action</button>
		          <div className="dropdown-divider"></div>
		          <button className="dropdown-item">Something else here</button>
		        </div>
		      </li>
		      <li className="nav-item">
		        <a className="nav-link disabled" href='...' tabIndex="-1" aria-disabled="true">Disabled</a>
		      </li>
		    </ul>    
		  </div>
		</nav>
	</div>


	)

export default Menu