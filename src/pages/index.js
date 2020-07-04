import React from 'react';
import Link from 'next/link';

const Index = () => {
	return (
		<div className="home">
			<p className="my-12 text-center">
				A sfsdoar sempre busca por atender melhor seus clientes e parceiros.
				<br /> Por isso, estamos sempre abertos a ouvir a sua opinião.
			</p>

			<div className="text-center mt-12 my-12">
				<Link href="/search">
					<a className="text-lg text-white bg-purple-600 px-6 py-4 font-bold rounded-lg  hover:shadow-lg ">
						Dar opinião ou sugestão
					</a>
				</Link>
			</div>

			<p className="my-12 text-center">Messagem do desconto.</p>
		</div>
	);
};

export default Index;
