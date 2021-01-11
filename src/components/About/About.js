import React from 'react';
import { Element } from 'react-scroll';

function About() {
	return (
		<Element name="about">
			<div className="container pb-5 pt-5">
				<div className="row">
					<div className="col-lg-6 col-md-6 col-sm-12 col-12 img">
						<div className="d-flex justify-content-center align-items-center">
							<img className="img-fluid" src="/static/mock.png" alt="about" />
						</div>
					</div>
					<div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-5">
						<h4 dir="rtl" style={{ fontWeight: 'bold' }} className="text-right">
							"آنچه طراحی را از هنر جدا میکند کاراییست"
						</h4>
						<p dir="rtl" style={{ fontSize: '1.3em' }} className="text-right mt-4">
							من برنامه نویسی رو با آخرین ورژن فریم ورک های وب و تکنولوژی های دیتابیس و سرور عالی و سریع
							انجام میدم و همیشه تمرکزم ارائه خدمات مشتری مدار در طراحی وب سایت و رضایت مشتری هستش .
						</p>
						<p dir="rtl" style={{ fontSize: '1.3em' }} className="text-right">
							فناوری همیشه در حال تحول و تغییر است . شوق و علاقه من به یادگیری تکنولوژی های جدید بشدت زیاد
							هستش و علاقه مندم به دنبال کردن آخرین روندها و در هر فرصت مشتاق به شرکت آموزش مداوم که در
							دسترس باشد هستم .
						</p>
					</div>
				</div>
			</div>
			<style jsx>
				{`
					@media screen and (max-width: 600px) {
						.img {
							padding-bottom: 2em;
						}
					}
				`}
			</style>
		</Element>
	);
}

export default About;
