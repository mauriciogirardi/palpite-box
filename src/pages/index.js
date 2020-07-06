import React from 'react';
import Link from 'next/link';
import useSWR from 'swr';
import Head from 'next/head';

const fetcher = (...args) => fetch(...args).then(res => res.json());

const Index = () => {
	const { data, error } = useSWR('/api/getPromotion', fetcher);

	return (
		<div className="h-screen flex justify-center items-center">
			<div>
				<Head>
					<title>PalpiteBox</title>
				</Head>
				<p className=" text-center">
					A sfsdoar sempre busca por atender melhor seus clientes e parceiros.
					<br /> Por isso, estamos sempre abertos a ouvir a sua opinião.
				</p>

				<div className="text-center mt-12 ">
					<Link href="/search">
						<a className="text-lg text-white bg-purple-600 px-6 py-4 font-bold rounded-lg  hover:shadow-lg ">
							Dar opinião ou sugestão
						</a>
					</Link>
				</div>

				{!data && <p className="text-center font-bold">Carregando...</p>}
				{!error && data && data.showCoupon && (
					<p className="my-12 text-center">{data.message}</p>
				)}
			</div>
		</div>
	);
};

export default Index;
