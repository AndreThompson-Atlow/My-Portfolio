import React from 'react';
import portfolio from '../images/portfolio.png';

function Project({ name, url, image, github, description }) {
	return (
		<div className='project' style={{ display: 'flex' }}>
			<h3>{name}</h3>
			<img src={portfolio} className='medium_image' alt='portfolio website' />
			<p>{description}</p>
			<a href='www.github.com'>View on Github</a>
			<a href='www.github.com'>View Live</a>
		</div>
	);
}

export default Project;
