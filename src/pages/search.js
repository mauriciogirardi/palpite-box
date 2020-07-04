import React from 'react';

const Search = () => {
	return (
		<div className="pt-6">
			<p className="my-4 text-center font-bold text-2xl">
				Críticas e sugestões
			</p>
			<p className=" text-center mb-8">
				A sfsdoar sempre busca por atender melhor seus clientes e parceiros.
				<br /> Por isso, estamos sempre abertos a ouvir a sua opinião.
			</p>

			<div className="w-56 mx-auto my-12">
				<label className="font-bold text-gray-700">Seu nome</label>
				<input
					type="text"
					className="bg-gray-300 w-64 text-gray-700 h-12 pl-2 border-purple-300 block rounded-md outline-none mb-4"
				/>

				<label className="font-bold text-gray-700">Seu nome</label>
				<input
					type="text"
					className="bg-gray-300 w-64 text-gray-700 h-12 pl-2 border-purple-300 block rounded-md outline-none  mb-4"
				/>
			</div>
		</div>
	);
};

export default Search;
