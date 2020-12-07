import React, { Fragment } from 'react';
import { Element } from 'react-scroll';
function Resume() {
	return (
		<Fragment>
			<div
				className="d-flex flex-column justify-content-center align-items-center mt-4"
				style={{ background: 'black', height: '300px' }}
			>
				<Element name="resume">
					<p dir="rtl" className="resumetext text-center" style={{ color: 'white' }}>
						به استخدام من تمایل دارید ؟
					</p>
				</Element>
				<a
					href="/static/resume.pdf"
					download
					className="mt-4"
					style={{
						background: 'black',
						color: 'white',
						padding: '.4em 1.3em',
						border: '1px solid white',

						fontSize: '1.5em'
					}}
				>
					دانلود رزومه
				</a>
			</div>
			<style jsx>
				{`
					.resumetext {
						font-size: 2em;
					}
					@media screen and (max-width: 600px) {
						.resumetext {
							font-size: 1.8em;
						}
					}
				`}
			</style>
		</Fragment>
	);
}

export default Resume;
