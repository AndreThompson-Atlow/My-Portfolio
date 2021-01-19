import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { ImStackoverflow } from 'react-icons/im';
import { FaFreeCodeCamp } from 'react-icons/fa';

function Profiles() {
	return (
		<div className='small_container' style={{ width: '100%' }}>
			<a
				href='https://github.com/AndreThompson-Atlow'
				target='_'
				style={{ textDecoration: 'none' }}
				className='media_link'>
				<h2>Github</h2>
				<AiFillGithub />
			</a>
			<a
				href='https://www.linkedin.com/in/andre-thompson-8279001a6/'
				target='_'
				style={{ textDecoration: 'none' }}
				className='media_link'>
				<h2>LinkedIn</h2>
				<AiFillLinkedin />
			</a>
			<a
				href='https://stackoverflow.com/users/13335118/andre-thompson?tab=profile'
				target='_'
				style={{ textDecoration: 'none' }}
				className='media_link'>
				<h2>Stackoverflow</h2>
				<ImStackoverflow />
			</a>
		</div>
	);
}

export default Profiles;
