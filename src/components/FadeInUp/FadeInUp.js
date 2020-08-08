import React from 'react';
import classnames from 'classnames';

import { useInView } from 'react-intersection-observer';

import './FadeInUp.scss';

const FadeInUp = ({ className, children }) => {
    const [ref, inView] = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    return (
        <div
            className={classnames("fade-in-up", {
                "fade-in-up--animated": inView,
                [className]: !!className,
            })}
            ref={ref}
        >
            { children }
        </div>
    )
};

FadeInUp.defaultProps = {
    className: '',
};

export default FadeInUp;
