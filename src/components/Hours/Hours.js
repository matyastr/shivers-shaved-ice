import React from 'react';
import classnames from 'classnames';

import './Hours.scss';

const Hours = ({ isDarkBackground }) => (
    <div className={classnames("hours", { "hours--dark-bg" : isDarkBackground })}>
        <div className="hours-row">
            <strong className="hours-day">
                Mon - Thur
            </strong>
            <span className="hours-time">
                TBD
            </span>
        </div>
        <div className="hours-row">
            <strong className="hours-day">
                Fri & Sat
            </strong>
            <span className="hours-time">
                TBD
            </span>
        </div>
        <div className="hours-row">
            <strong className="hours-day">
                Sun
            </strong>
            <span className="hours-time">
                TBD
            </span>
        </div>
    </div>
);

export default Hours;
