import React from 'react';
import Circle from './Components/Circle';
import Profile from './Components/Profile';
import NavLinks from './Components/NavLinks';

function App() {
	return (
		<main>
			<Circle location='bottom_left' />
			<Circle location='top_right' />
			<div className='glass_display'>
				<div className='nav'>
					<Profile />
					<NavLinks />
				</div>
				<div className='primary'></div>
			</div>
		</main>
	);
}

export default App;
