import React from 'react';
import Link from 'next/link';

const Search = () => {
	return (
		<div className="search">
			<h1>Pesquisa</h1>

			<Link href="/">
				<a>home</a>
			</Link>
		</div>
	);
};

export default Search;
