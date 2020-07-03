import React from 'react';
import Link from 'next/link';

const About = () => {
	return (
		<div className="about">
			<h1>Sobre</h1>

			<Link href="/">
				<a>Home</a>
			</Link>
		</div>
	);
};

export default About;
