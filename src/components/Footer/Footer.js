import React, { Fragment } from 'react';
function Footer() {
	const year = '١٣٩٩';
	return (
		<Fragment>
			<div className="footer">
				<div>
					<p className="name">مهدی فرجی</p>
				</div>
				<div className="d-flex justify-content-center">
					<a href="mailto:mahdifarajideveloper@gmail.com" target="_blank">
						<img className="github" src="/static/gmail.png" />
					</a>
					<a rel="noopener noreferrer" target="_blank" href="https://wa.me/989214356647">
						<img className="github" src="/static/github.png" />
					</a>
				</div>
				<p className="year">فرانت اند دولوپر مهدی فرجی © {year}</p>
			</div>
			<style jsx>
				{`
					.footer {
						padding: 4em 0;
						background: rgb(247, 247, 247);
						color: black;
						display: flex;
						justify-content: center;
						flex-direction: column;
					}

					.name {
						text-align: center;
						font-size: 1.4em;
						padding-bottom: .6em;
					}

					.year {
						text-align: center;
						margin-top: 1.4em;
						color: rgb(169, 169, 169);
					}

					.github {
						width: 30px;
						margin: 0 .5em;
					}
				`}
			</style>
		</Fragment>
	);
}

export default Footer;
