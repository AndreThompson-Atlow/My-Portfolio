import React from 'react';
import avatar from '../images/avatar.png';

function Profile() {
	return (
		<div className='profile'>
			<img src={avatar} alt='Andre Thompson' className='avatar' />
			<h2 className='title'>Andre Thompson</h2>
			<p>Full Stack React/Node Developer</p>
		</div>
	);
}

export default Profile;
