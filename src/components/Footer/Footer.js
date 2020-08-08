import React from 'react'

import FooterHours from './FooterHours';
import './Footer.scss';

const Footer = () => (
	<footer className="footer">
		<div className="container">
			<div className="footer-row">
				<div className="footer-row-content">
					<div className="footer-row-content-row">
						<div className="footer-row-column">
							<strong>OUR HOURS</strong>
							<FooterHours />
						</div>
						<div className="footer-row-column">
							<strong>OUR LOCATION</strong>
							1234 Location TBD<br />
							Gibsonia, Pennsylvania
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

