import React from 'react';
import classnames from 'classnames';

import FadeInUp from '../FadeInUp/FadeInUp';
import './StackedContentRow.scss';

const StackedContentRow = ({ children, image, isEvenRow, ...props }) => (
    <FadeInUp>
        <section
            className={classnames("stacked-content-row", {
                "stacked-content-row--inverse": isEvenRow,
            })}
            {...props}
        >
            <div
                className="stacked-content-row-image"
                style={{
                    backgroundImage: `url(${
                        image ? (!!image.childImageSharp ? image.childImageSharp.fluid.src : image) : ''
                    })`,
                }}
            />
            <div className="stacked-content-row-content">
                <div>
                    { children }
                </div>
            </div>
        </section>
    </FadeInUp>
);

export default StackedContentRow;
