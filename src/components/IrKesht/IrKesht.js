import React, { Fragment } from 'react';
function IrKesht() {
	return (
		<Fragment>
			<div className="kkw mb-5">
				<div className="divtext">
					<h2 style={{ textShadow: '0px 0px 7px #000000' }} className="worktitle">
						ایران کشت نوین
					</h2>
					<p style={{ textShadow: '0px 0px 7px #000000' }} className="worktext">
						فروشگاه محصولات کشاورزی
					</p>
					<div className="d-flex justify-content-end">
						<a rel="noopener noreferrer" target="_blank" href="https://irkesht.ir">
							<button className="view">مشاهده</button>
						</a>
					</div>
				</div>
			</div>
			<style jsx>
				{`
					.divtext {
						position: absolute;
						bottom: 120px;
						right: 100px;
						transition: all .2s;
					}

					.view {
						border: none;
						outline: none;
						cursor: pointer;
						padding: .6em 1.2em;
						background: rgb(23, 31, 90);
						color: white;
						font-size: 1.4em;
					}

					.worktitle {
						font-weight: bold;
						color: white;
						font-size: 4em;
						text-align: right;
					}
					.worktext {
						font-size: 1.3em;
						color: white;
						font-size: 2em;
						text-align: right;
					}

					.kkw {
						background: url(/static/irkesht.jpg) no-repeat;
						background-size: cover;
						position: relative;
						height: 600px;
						width: 100%;
						cursor: pointer;
						transition: all .2s;
						border-radius: 4px;
					}

					.kkw:hover {
						box-shadow: 0 0 10px black;
						filter: grayscale(40%);
					}

					.kkw:hover .number {
						display: block;
					}

					@media screen and (max-width: 600px) {
						.kkw {
							height: 400px;
						}
						.divtext {
							bottom: 10px;
							right: 10px;
						}

						.worktitle {
							font-size: 2.4em;
						}
						.worktext {
							font-size: 1.4em;
						}
					}
				`}
			</style>
		</Fragment>
	);
}

export default IrKesht;
