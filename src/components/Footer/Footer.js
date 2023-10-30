import React from 'react'

import contactData from '../../templates/data/contact.json';
import './Footer.scss';

const Footer = () => (
	<footer className="footer">
		<div className="container">
			<div className="footer-row">
				<div className="footer-row-content">
					<div className="footer-row-content-row">
						<div className="footer-row-column">
							<strong>OUR LOCATION</strong>
							<div>Proudly serving the Greater Pittsburgh Region</div>
						</div>
						<div className="footer-row-column">
							<strong>GET IN TOUCH</strong>
							{contactData.email}<br/>
							{contactData.phone}
						</div>
					</div>
					<div className="footer-copyright font-secondary">
						&copy; Shiver's Shaved Ice
					</div>
				</div>
				<div className="footer-row-logo">
					<img src="/img/shivers-logo.png" alt="Shiver's Shaved Ice" />
				</div>
			</div>
		</div>
  	</footer>
);

export default Footer;

