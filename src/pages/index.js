import React from 'react';
import Link from 'next/link';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

const Index = () => {
	const { data, error } = useSWR('/api/getPromotion', fetcher);

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

			{!data && <p className="text-center">Carregando...</p>}
			{!error && data && data.showCoupon && (
				<p className="my-12 text-center">{data.message}</p>
			)}
		</div>
	);
};

export default Index;
