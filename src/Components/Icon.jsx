import React, { useState, useEffect } from 'react';
import { GrInfo } from 'react-icons/gr';
import { AiFillGithub } from 'react-icons/ai';
import { GrCode } from 'react-icons/gr';

function Icon({ iconType }) {
	const [icon, setIcon] = useState('');
	useEffect(() => {
		switch (iconType) {
			case 'about':
				setIcon(<GrInfo />);
				break;
			case 'projects':
				setIcon(<GrCode />);
				break;
			case 'profiles':
				setIcon(<AiFillGithub />);
				break;
			default:
				setIcon(<GrInfo />);
		}
	}, []);
	return <div className='icon'>{icon}</div>;
}

export default Icon;
