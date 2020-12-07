import NProgress from 'nprogress';
import Router from 'next/router';
import 'nprogress/nprogress.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.min.css';
import 'aos/dist/aos.css';

Router.events.on('routeChangeStart', () => {
	NProgress.configure({ showSpinner: false }).start();
});
Router.events.on('routeChangeComplete', () => {
	NProgress.configure({ showSpinner: false }).done();
});

export default function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}
