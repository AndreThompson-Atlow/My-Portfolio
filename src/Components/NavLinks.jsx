import React from 'react';
import Link from './Link.jsx';
function NavLinks() {
	return (
		<div className='nav_links'>
			<Link icon='about' text='About' />
			<Link icon='projects' text='Projects' />
			<Link icon='profiles' text='Profiles' />
		</div>
	);
}

export default NavLinks;
