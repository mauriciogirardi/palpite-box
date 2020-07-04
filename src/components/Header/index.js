import React from 'react';
import Link from 'next/link';

const Header = () => {
	return (
		<>
			<div className="bg-gray-400 p-4  ">
				<div className="container mx-auto ">
					<Link href="/">
						<a>
							<img
								className="mx-auto"
								width="120"
								src="logo_palpitebox.png"
								alt="palpiteBox"
							/>
						</a>
					</Link>
				</div>
			</div>

			<div className="bg-gray-300 p-3 shadow-md text-center ">
				<Link href="/about">
					<a className="px-3 font-medium hover:underline">Sobre</a>
				</Link>

				<Link href="/contact">
					<a className="px-3 font-medium hover:underline">Contato</a>
				</Link>

				<Link href="/search">
					<a className="px-3 font-medium hover:underline">Pesquisa</a>
				</Link>
			</div>
		</>
	);
};

export default Header;
