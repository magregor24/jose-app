import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Pelis from '../pages/Pelis'
import Play from '../pages/Play'
import NoFound from '../pages/NoFound'


const App = () => (

				
			<BrowserRouter>

				<Switch> 

					<Route  exact path='/' component={Pelis} />
					<Route  path="/Pelis" component={Pelis} />
					<Route  path="/Play/:nombre" component={Play} />
					<Route component={NoFound} />
					
				</Switch>

			</BrowserRouter>
)




export default App