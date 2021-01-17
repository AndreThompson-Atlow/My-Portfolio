import React from 'react';
import LinkInfo from './Link.jsx';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function NavLinks() {
	return (
		<div className='nav_links'>
			<Link to='/' style={{ textDecoration: 'none' }}>
				<LinkInfo icon='about' text='About' />
			</Link>
			<Link to='/projects' style={{ textDecoration: 'none' }}>
				<LinkInfo icon='projects' text='Projects' />
			</Link>
			<Link to='/profiles' style={{ textDecoration: 'none' }}>
				<LinkInfo icon='profiles' text='Profiles' />
			</Link>
		</div>
	);
}

export default NavLinks;
