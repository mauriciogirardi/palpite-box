import React, { useState } from 'react';
import Head from 'next/head';

const Search = () => {
	const [sucess, setSucess] = useState(false);
	const [sucessReturn, setSucessReturn] = useState({});
	const [alertForm, SetAlertForm] = useState(false);

	const [form, setForm] = useState({
		Nome: '',
		Email: '',
		Whatsapp: '',
		Nota: 0,
	});

	const notas = [0, 1, 2, 3, 4, 5];

	const handleButtonSave = async () => {
		if (
			form.Nome === '' ||
			form.Whatsapp === '' ||
			form.Email === '' ||
			form.Nota === ''
		) {
			SetAlertForm(true);
			return;
		}

		try {
			const response = await fetch('/api/save', {
				method: 'POST',
				body: JSON.stringify(form),
			});

			const data = await response.json();

			setSucess(true);
			setSucessReturn(data);
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

	const handleCloseAlertForm = () => {
		SetAlertForm(false);
	};

	return (
		<div className="pt-6 ">
			<Head>
				<title>Pesquisa</title>
			</Head>
			<p className="my-4 text-center font-bold text-2xl">
				Críticas e sugestões
			</p>
			<p className=" text-center mb-8">
				A sfsdoar sempre busca por atender melhor seus clientes e parceiros.
				<br /> Por isso, estamos sempre abertos a ouvir a sua opinião.
			</p>

			{alertForm && (
				<div
					className=" m-auto w-2/5 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
					role="alert"
				>
					<strong className="font-bold">
						Preencha todo os campos formulario
					</strong>
					<button
						onClick={handleCloseAlertForm}
						className="absolute top-0 bottom-0 right-0 px-4 py-3"
					>
						<svg
							className="fill-current h-6 w-6 text-red-500"
							role="button"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
						>
							<title>Fechar</title>
							<path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
						</svg>
					</button>
				</div>
			)}

			{!sucess && (
				<div className="w-56 mx-auto my-12 ">
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

					<label className="font-bold text-gray-700">Nota</label>
					<div className="flex justify-around w-64 ">
						{notas.map(nota => (
							<div key={nota}>
								<p className="font-bold text-gray-500">{nota}</p>
								<input
									type="radio"
									name="Nota"
									value={nota}
									onChange={handleInput}
								/>
							</div>
						))}
					</div>

					<button
						className="text-lg text-white mb-12 bg-purple-600 px-6 w-64 h-12 mt-4   font-bold rounded-lg  hover:shadow-lg "
						onClick={handleButtonSave}
					>
						Salvar
					</button>
				</div>
			)}
			{sucess && (
				<div className=" m-auto mb-8">
					<div className="   ">
						<p className="text-center font-bold text-purple-700 text-xl">
							Obrigado por contribuir com sua sugestão ou crítica.
						</p>
					</div>

					{sucessReturn.showCupom && (
						<div className=" m-auto  w-3/5  p-6 text-center ">
							<div>
								<span className="text-purple-700">{sucessReturn.Promocao}</span>
							</div>
						</div>
					)}

					{sucessReturn.showCupom && (
						<div className="flex flex-wrap m-auto border w-1/4 justify-around p-6 bg-purple-500 border-purple-900 max-w-md:w-full ">
							<img width="70" src="logo_palpitebox.png" alt="palpiteBox" />
							<div>
								<p className="font-bold text-white"> Seu Cupom:</p>
								<span className="font-bold text-white">
									{sucessReturn.Cupom}
								</span>
							</div>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default Search;
