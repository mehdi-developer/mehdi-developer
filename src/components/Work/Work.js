import React, { useEffect } from 'react';
import AOS from 'aos';
import { Element } from 'react-scroll';
import KKW from '../KKW/KKW';
import Ravid from '../Ravid/Ravid';
import Weather from '../Weather/Weather';
import Bafredo from '../Bafredo/Bafredo';
import Warzone from '../Warzone/Warzone';
import Dashboard from '../Dashboard/Dashboard';
import IrKesht from '../IrKesht/IrKesht';
import Viona from '../Viona/Viona';
function Work() {
	useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);
	return (
		<Element name="work">
			<div className="container mt-5">
				<p className="text-center pb-5" style={{ fontSize: '3em', fontWeight: 'bold' }}>
					جدیدترین کارها
				</p>
				<div className="row">
					<div data-aos="fade" data-aos-once={true} className="col-12 pb-5">
						<div className="d-flex justify-content-center">
							<Viona />
						</div>
					</div>
					<div data-aos="fade" data-aos-once={true} className="col-12 pb-5">
						<div className="d-flex justify-content-center">
							<IrKesht />
						</div>
					</div>
					<div data-aos="fade" data-aos-once={true} className="col-12 pb-5">
						<div className="d-flex justify-content-center">
							<KKW />
						</div>
					</div>
					<div data-aos="fade" data-aos-once={true} className="col-12 pb-5">
						<div className="d-flex justify-content-center">
							<Ravid />
						</div>
					</div>
					<div data-aos="fade" data-aos-once={true} className="col-12 pb-5">
						<div className="d-flex justify-content-center">
							<Weather />
						</div>
					</div>
					<div data-aos="fade" data-aos-once={true} className="col-12 pb-5">
						<div className="d-flex justify-content-center">
							<Warzone />
						</div>
					</div>
					<div data-aos="fade" data-aos-once={true} className="col-12 pb-5">
						<div className="d-flex justify-content-center">
							<Dashboard />
						</div>
					</div>
					<div data-aos="fade" data-aos-once={true} className="col-12 pb-5">
						<div className="d-flex justify-content-center">
							<Bafredo />
						</div>
					</div>
				</div>
			</div>
		</Element>
	);
}

export default Work;
