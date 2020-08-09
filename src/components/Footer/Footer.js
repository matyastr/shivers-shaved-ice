import React from 'react'

import Address from '../Address/Address';
import Hours from '../Hours/Hours';
import './Footer.scss';

const Footer = () => (
	<footer className="footer">
		<div className="container">
			<div className="footer-row">
				<div className="footer-row-content">
					<div className="footer-row-content-row">
						<div className="footer-row-column">
							<strong>OUR HOURS</strong>
							<Hours isDarkBackground />
						</div>
						<div className="footer-row-column">
							<strong>OUR LOCATION</strong>
							<Address />
						</div>
						<div className="footer-row-column">
							<strong>GET IN TOUCH</strong>
							contact@sprinkandjimmys.com<br/>
							(555) 555 - 5555
						</div>
					</div>
					<div className="footer-copyright font-secondary">
						&copy; Sprink & Jimmy's
					</div>
				</div>
				<div className="footer-row-logo">
					<img src="/img/logo-flat.svg" alt="Ice cream cones" />
				</div>
			</div>
		</div>
  	</footer>
);

export default Footer;

