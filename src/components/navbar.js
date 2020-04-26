import React from 'react';
import { FaGithub } from 'react-icons/fa';

import './style.scss';
import juanLogo from '../images/juan-logo.png';

const Navbar = () => (
	<div className="hero-head is-hidden-mobile">
		<nav className="navbar">
			<div className="container">
				<div className="navbar-brand">
					<a
						className="navbar-item"
						href="https://juanesteban-ux.com"
					>
						<img src={juanLogo} alt="Logo-1" />
					</a>
				</div>
			</div>
		</nav>
	</div>
);

export default Navbar;
