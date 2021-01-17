import React from 'react';

function About() {
	return (
		<div className='container'>
			<h2> About Me</h2>
			<p>
				My name is Andre Thompson, and i'm a full stack React / Node developer.
				I'm comfortable writing the API and creating a complimentary React front
				end to support it. I have a passion for problem solving, playing chess
				and reading literature.
			</p>
			<h2> Work Experience</h2>
			<p>
				I currently work in I.T. but I am aiming to change careers to web
				development. I've been with the same company for nearly three years now,
				but I am looking for a greater challenge. Fixing computers is one of the
				most enjoyable experiences i've ever had, but it's time to expand my
				skillset.
			</p>
			<h2>Programming Experience</h2>
			<p>
				I'm a self taught developer, but i've been at it for awhile. I started
				programming in Java and learned basic html/css back in highschool. Since
				then, i've taught myself Javascript and some Python. My main emphasis
				however, has been the MERN stack. This means MongoDB/Mongoose, Express,
				React/Redux and Node. I've got basic familiarity with Sass, Bootstrap 4
				and Materialize, but most of the time I use vanilla CSS.
			</p>
			<h2>Technologies</h2>
			<ul className='list'>
				<li>HTML / CSS</li>
				<li>Javascript</li>
				<li>React / Redux</li>
				<li>Express / Node</li>
				<li>Mongo DB</li>
				<li>Git / Github</li>
			</ul>
		</div>
	);
}

export default About;
