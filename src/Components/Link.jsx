import React from 'react';
import Icon from './Icon';

function Link({ icon, text }) {
	return (
		<div className='link'>
			<Icon iconType={icon} />
			<h2>{text}</h2>
		</div>
	);
}

export default Link;
