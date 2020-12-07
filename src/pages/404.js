import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout/Layout';

function ErrorPage() {
	return (
		<Layout title="صفحه یافت نشد">
			<h4 className="text-center" style={{ marginTop: '7em' }}>
				صفحه مورد نظر یافت نشد
			</h4>
			<div className="d-flex justify-content-center" style={{ paddingBottom: '7em' }}>
				<Link href="/">صفحه اصلی</Link>
			</div>
		</Layout>
	);
}

export default ErrorPage;
