import React from 'react';
import classnames from 'classnames';

import hoursData from '../../templates/data/hours.json';
import './Hours.scss';

const Hours = ({ isDarkBackground }) => (
    <div className={classnames("hours", { "hours--dark-bg" : isDarkBackground })}>
        {
            hoursData.hours.map(({ day, time }) => (
                <div className="hours-row" key={day}>
                    <strong className="hours-day">
                        { day }
                    </strong>
                    <span className="hours-time">
                        { time }
                    </span>
                </div>
            ))
        }
    </div>
);

export default Hours;
