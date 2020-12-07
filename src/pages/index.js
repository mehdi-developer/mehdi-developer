import React from 'react';

// Components
import Layout from '../components/Layout/Layout';
import Background from '../components/Background/Background';
import Middle from '../components/Middle/Middle';
import About from '../components/About/About';
import Resume from '../components/Resume/Resume';
import Work from '../components/Work/Work';

function Homepage() {
	return (
		<Layout title="صفحه اصلی">
			<Background />
			<Middle />
			<Work />
			<About />
			<Resume />
		</Layout>
	);
}

export default Homepage;
