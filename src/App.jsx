import React from 'react';
import Circle from './Components/Circle';
import Profile from './Components/Profile';
import NavLinks from './Components/NavLinks';
import About from './Components/About';
import Projects from './Components/Projects';
import Profiles from './Components/Profiles';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
	return (
		<main>
			<Router>
				<Circle location='bottom_left' />
				<Circle location='top_right' />
				<div className='glass_display'>
					<div className='nav'>
						<Profile />
						<NavLinks />
					</div>
					<div className='primary'>
						<Route exact path='/'>
							<About />
						</Route>
						<Route path='/projects'>
							<Projects />
						</Route>
						<Route path='/profiles'>
							<Profiles />
						</Route>
					</div>
				</div>
			</Router>
		</main>
	);
}

export default App;
