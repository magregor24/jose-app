import React from 'react'
import './estilos/Menu.css'
import { Link } from 'react-router-dom'



const Menu = () => (

	<div>

			<nav className="navbar navbar-expand-lg navbar-white nav menu">
			  <a className="navbar-brand" href="..."> MCpelis </a>
			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>

			  <div className="collapse navbar-collapse" id="navbarSupportedContent">
			    <ul className="navbar-nav mr-auto">
			      <li className="nav-item active">
			        <a className="nav-link" href="...">Home <span className="sr-only">(current)</span></a>
			      </li>
			      <li className="nav-item">
			        <a className="nav-link" href="...">Link</a>
			      </li>
			      <li className="nav-item dropdown">
			        <a className="nav-link dropdown-toggle" href="..." id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			          Categorias
			        </a>
			        <div className="dropdown-menu  nav2" aria-labelledby="navbarDropdown">
			          <a id='accion' className="dropdown-item" href="...">Action</a>
			          <a className="dropdown-item" href="...">Another action</a>
			          <div className="dropdown-divider"></div>
			          <a className="dropdown-item" href="...">Something else here</a>
			        </div>
			      </li>
			      
			    </ul>
			    
			  </div>
			</nav>

			</div>


	)

export default Menu