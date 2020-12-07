import React, { Fragment } from 'react';

function Middle() {
	return (
		<Fragment>
			<div className="container pb-5 pt-5">
				<div className="row">
					<div className="col-lg-6 col-md-6 col-sm-12 col-12">
						<div className="d-flex flex-column justify-content-center align-items-center">
							<img style={{ width: '50px' }} className="mb-2" src="/static/responsive.png" />
							<h4 style={{ fontWeight: 'bold' }} className="pt-2 text-center">
								طرح بندی رسپانسیو
							</h4>
							<p style={{ fontSize: '1.3em' }} className="pt-2 text-center">
								ساپورت تمامی گوشی های اندروید , اپل و تبلت
							</p>
						</div>
					</div>
					<div className="col-lg-6 col-md-6 col-sm-12 col-12 bottom">
						<div className="d-flex flex-column justify-content-center align-items-center">
							<img className="mb-2" src="/static/design.png" />
							<h4 style={{ fontWeight: 'bold' }} className="pt-2 text-center">
								طراحی نظیف
							</h4>
							<p style={{ fontSize: '1.3em' }} className="pt-2 text-center">
								رابط کاربری متناسب با انواع وب سایت
							</p>
						</div>
					</div>
				</div>
			</div>
			<style jsx>
				{`
					@media screen and (max-width: 600px) {
						.bottom {
							padding-top: 4em;
							padding-bottom: 4em;
						}
					}
				`}
			</style>
		</Fragment>
	);
}

export default Middle;
