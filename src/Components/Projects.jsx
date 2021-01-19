import React from 'react';
import { projects } from '../Data';
import Project from './Project';

function Projects() {
	return (
		<div className='tall_container' style={{ width: '100%', padding: '1rem' }}>
			<h2 style={{ marginBottom: '0.5rem' }}> Showcase Projects </h2>
			<p>
				These projects demonstrate a deep understanding of front end & back end.
				They are fully complete and usable projects with CRUD applications.{' '}
			</p>
			<div className='projects'>
				{projects.map((project) => {
					return <Project key={project.id} {...project} />;
				})}
			</div>
			<h2 style={{ marginBottom: '0.5rem' }}> Skillset Projects </h2>
			<p>
				{' '}
				These projects are not necessarily usable or complete, however they each
				demonstrate an understanding of a specific technology.{' '}
			</p>
			<div className='projects'>
				{projects.map((project) => {
					return <Project key={project.id} {...project} />;
				})}
			</div>
		</div>
	);
}

export default Projects;
