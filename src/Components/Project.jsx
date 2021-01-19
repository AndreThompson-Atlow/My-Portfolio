import React from 'react';
import portfolio from '../images/portfolio.png';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

function Project({ name, url, image, github, description, activeState }) {
	return (
		<div className={`project ${activeState}`} style={{ display: 'flex' }}>
			<div className='project-container'>
				<h3>{name}</h3>
				<img src={portfolio} className='medium_image' alt='portfolio website' />
				<p>{description}</p>
				<a href='www.github.com'>View on Github</a>
				<a href='www.github.com'>View Live</a>
			</div>
		</div>
	);
}

export default Project;
