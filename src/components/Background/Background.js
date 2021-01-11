import React, { Fragment, useEffect } from 'react';
import Typed from 'react-typed';
import AOS from 'aos';

function Background() {
	useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);
	return (
		<Fragment>
			<div className="back">
				<div className="text">
					<div>
						<p data-aos-once={true} data-aos="fade-up" className="title">
							مهدی فرجی
						</p>
						<div dir="rtl" className="mt-3">
							<Typed
								loop={true}
								loopCount={3}
								className="desc"
								style={{
									color: '#171654 ',
									fontSize: '1.5em'
								}}
								strings={[
									'طراح و توسعه دهنده فرانت اند',
									'طراحی وبسایت فروشگاهی',
									'کاملا رسپانسیو',
									'برنامه نویسی با جدیدترین فریمورک',
									'ساپورت تمامی دیوایس ها',
									'سرورساید رندرینگ',
									'تبدیل انواع قالب به ری اکت',
									'توسعه نرم افزار اندروید'
								]}
								typeSpeed={80}
								backSpeed={30}
								startDelay={2200}
								backDelay={1500}
							/>
						</div>
					</div>
				</div>
			</div>
			<style jsx>
				{`
					.back {
						background: url(/static/shadownew.jpg) no-repeat;
						background-position-x: 0;
						background-size: cover;
						height: 700px;
						position: relative;
					}

					.text {
						display: flex;
						align-items: center;
						justify-content: center;
						font-weight: bolder;
						text-align: center;
					}

					.title {
						font-size: 5em;
						text-align: right;
						margin-top: 1.5em;
						margin-bottom: 0;
					}

					@media screen and (max-width: 800px) {
						.title {
							text-align: center;
							font-size: 3em;
							margin-top: 3em;
						}
						.back {
							background-position-x: -170px;
							height: 568px;
						}
					}
				`}
			</style>
		</Fragment>
	);
}

export default Background;
