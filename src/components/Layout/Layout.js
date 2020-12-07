import React, { Fragment } from 'react';
import Head from 'next/head';

// Components
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

function Layout({ children, title }) {
	return (
		<Fragment>
			<Head>
				<title>مهدی فرجی | {title}</title>
				<link href="https://cdn.fontcdn.ir/Font/Persian/Sahel/Sahel.css" rel="stylesheet" type="text/css" />
			</Head>
			<Nav />
			{children}
			<Footer />
			<style jsx global>
				{`
					* {
						font-family: Sahel;
					}
					html {
						scroll-behavior: smooth;
						padding: 0;
						margin: 0;
						box-sizing: border-box;
					}

					body {
						padding: 0;
						margin: 0;
						box-sizing: border-box;
					}
				`}
			</style>
		</Fragment>
	);
}

export default Layout;
