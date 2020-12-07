import React, { Fragment, useState } from 'react';
import { Pivot as Hamburger } from 'hamburger-react';
import { Drawer } from 'antd';
import { animateScroll as scroll, Link } from 'react-scroll';

function Nav() {
	const [ open, setOpen ] = useState(false);
	const [ nav, setNav ] = useState(false);
	const onClose = () => {
		setOpen(false);
	};
	const handleScroll = () => {
		if (window.pageYOffset > 140) {
			if (!nav) {
				setNav(true);
			}
		} else {
			if (nav) {
				setNav(false);
			}
		}
	};
	React.useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	return (
		<Fragment>
			<div id="nav" className="nav">
				<Drawer placement="top" closable={false} onClose={onClose} visible={open}>
					<div className="navlinks">
						<div>
							<Link smooth={true} to="resume">
								<p onClick={onClose} className="link">
									رزومه
								</p>
							</Link>
						</div>
						<div>
							<Link smooth={true} to="work">
								<p onClick={onClose} className="link">
									نمونه کار
								</p>
							</Link>
						</div>
						<div>
							<Link smooth={true} to="about">
								<p onClick={onClose} className="link">
									درباره من
								</p>
							</Link>
						</div>
					</div>
				</Drawer>
				<div>
					<a onClick={() => scroll.scrollToTop()}>
						<img className="img" src="/static/logo.png" />
					</a>
				</div>

				<div className="links">
					<div>
						<Link smooth={true} to="resume">
							<p className="link">رزومه</p>
						</Link>
					</div>
					<div>
						<Link smooth={true} to="work">
							<p className="link">نمونه کار</p>
						</Link>
					</div>
					<div className="mr-2">
						<Link smooth={true} to="about">
							<p className="link">درباره من</p>
						</Link>
					</div>
				</div>
				<div className="burger">
					<Hamburger color={'#595959'} rounded toggled={open} toggle={setOpen} />
				</div>
			</div>
			<style jsx>
				{`
					.nav {
						position: fixed;
						top: 0;
						left: 0;
						height: 100px;
						align-items: center;
						display: flex;
						z-index: 1002;
						justify-content: space-between;
						align-items: center;
						width: 100%;
					}

					.img {
						width: 90px;
						margin-left: 2em;
						margin-top: 3.5em;
					}

					.navlinks {
						margin-top: 5em;
						display: flex;
						justify-content: center;
						align-items: center;
						flex-direction: column;
					}

					.links {
						display: flex;
					}

					.link {
						color: #595959;
						margin: 0 1em;
						padding: .5em .5em;
						display: block;
						font-size: 1.2em;
						transition: all .2s;
					}

					.link:hover {
						color: black;
						text-decoration: none;
						background: #dfdfdf;
					}

					.burger {
						margin-right: 1.3em;
					}

					@media screen and (min-width: 800px) {
						.burger {
							display: none;
						}
					}

					@media screen and (max-width: 800px) {
						.links {
							display: none;
						}
						.img {
							width: 35px;
							margin-top: 1em;
						}
					}
				`}
			</style>
		</Fragment>
	);
}

export default Nav;
