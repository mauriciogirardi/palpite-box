import React from 'react';

const Footer = () => {
	return (
		<div className="bg-gray-700 p-5 ">
			<div className="container mx-auto ">
				<div className="flex justify-around">
					<img
						width="150"
						src="logo_semana_fsm.png"
						alt="semana fullstack master"
					/>
					<img width="150" src="logo_devpleno.png" alt="devpleno" />
				</div>
				<p className="text-center font-medium text-white mt-4 text-sm">
					Projeto desenvolvido por: Mauricio Girardi
				</p>
			</div>
		</div>
	);
};

export default Footer;
