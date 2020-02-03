import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Pelis from '../pages/Pelis'
import Play from '../pages/Play'
import NoFound from '../pages/NoFound'


const App = () => (

			<BrowserRouter>

				<Switch> 
					<Route  path="/Pelis" component={Pelis} />
					<Route  path="/Play" component={Play} />
					<Route component={NoFound} />
				</Switch>

			</BrowserRouter>
)




export default App