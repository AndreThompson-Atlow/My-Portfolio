import React, { useState, useEffect } from 'react';
import { projects } from '../Data';
import Project from './Project';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

function Projects() {
	const [index, setIndex] = useState(0);
	// useEffect(() => {
	// 	let slider = setInterval(() => {
	// 		nextSlide();
	// 	}, 3000);
	// 	return () => {
	// 		clearInterval(slider);
	// 	};
	// }, [index]);
	const nextSlide = () => {
		if (index === projects.length - 1) {
			setIndex(0);
		} else {
			setIndex(index + 1);
		}
	};
	const lastSlide = () => {
		if (index === 0) {
			setIndex(projects.length - 1);
		} else {
			setIndex(index - 1);
		}
	};
	return (
		<div className='tall_container' style={{ width: '100%', padding: '1rem' }}>
			<h2 style={{ margin: '2rem', fontSize: '36px' }}> My Projects </h2>
			<p>
				These projects demonstrate a deep understanding of front-end & back-end.
				They are fully complete and usable projects with CRUD applications.
			</p>
			<div className='projects'>
				{projects.map((project, newIndex) => {
					let position = 'project-next';
					if (index === newIndex) {
						position = 'project-active';
					} else if (index === 0 && newIndex === projects.length - 1) {
						position = 'project-last';
					} else if (newIndex === index - 1) {
						position = 'project-last';
					}
					return (
						<Project activeState={position} key={project.id} {...project} />
					);
				})}
				<button
					className='project-button project-button-left'
					onClick={lastSlide}>
					<FiChevronLeft className='icon' />
				</button>
				<button
					className='project-button project-button-right'
					onClick={nextSlide}>
					<FiChevronRight className='icon' />
				</button>
			</div>
		</div>
	);
}

export default Projects;
