import React, { useState } from 'react';

const Search = () => {
	const [form, setForm] = useState({
		Nome: '',
		Email: '',
		Whatsapp: '',
	});

	const handleButtonSave = async () => {
		try {
			const response = await fetch('/api/save', {
				method: 'POST',
				body: JSON.stringify(form),
			});

			const data = await response.json();
			console.log(data);
		} catch (err) {}
	};

	const handleInput = e => {
		const value = e.target.value;
		const key = e.target.name;
		setForm(i => ({
			...i,
			[key]: value,
		}));
	};

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
				<label className="font-bold text-gray-700">Nome</label>
				<input
					onChange={handleInput}
					name="Nome"
					value={form.Nome}
					type="text"
					className="bg-gray-300 w-64 text-gray-700 h-12 pl-2 border-purple-300 block rounded-md outline-none mb-4"
				/>

				<label className="font-bold text-gray-700">E-mail</label>
				<input
					onChange={handleInput}
					name="Email"
					value={form.Email}
					type="email"
					className="bg-gray-300 w-64 text-gray-700 h-12 pl-2 border-purple-300 block rounded-md outline-none  mb-4"
				/>

				<label className="font-bold text-gray-700">Whatsapp</label>
				<input
					onChange={handleInput}
					name="Whatsapp"
					value={form.Whatsapp}
					type="text"
					className="bg-gray-300 w-64 text-gray-700 h-12 pl-2 border-purple-300 block rounded-md outline-none  mb-4"
				/>

				<button
					className="text-lg text-white bg-purple-600 px-6 w-64 h-12 mt-4 font-bold rounded-lg  hover:shadow-lg "
					onClick={handleButtonSave}
				>
					Salvar
				</button>
			</div>
		</div>
	);
};

export default Search;
