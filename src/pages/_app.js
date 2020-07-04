import React from 'react';
import Layout from '../../src/layouts/index';

import '../../src/layouts/css/styles.css';

const MyApp = ({ Component, pageProps }) => {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
};

export default MyApp;
