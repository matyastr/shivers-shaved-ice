import React from 'react';

import './FooterHours.scss';

const FooterHours = () => (
    <div className="footer-hours">
        <div className="footer-hours-row">
            <strong className="footer-hours-day">
                Mon - Thur
            </strong>
            <span className="footer-hours-time">
                TBD
            </span>
        </div>
        <div className="footer-hours-row">
            <strong className="footer-hours-day">
                Fri & Sat
            </strong>
            <span className="footer-hours-time">
                TBD
            </span>
        </div>
        <div className="footer-hours-row">
            <strong className="footer-hours-day">
                Sun
            </strong>
            <span className="footer-hours-time">
                TBD
            </span>
        </div>
    </div>
);

export default FooterHours;
