import React from 'react';
import classnames from 'classnames';

import { Link } from 'gatsby';

import './Button.scss';

const BaseButton = props => <button {...props} />;

const Button = ({ children, large, to, ...props }) => {
    const Tag = to ? Link : BaseButton;

    return (
        <Tag
            className={classnames("button", {
                "button--large": large,
            })}
            {...props}
            {...(to ? { to } : undefined)}
        >
            { children }
        </Tag>
    );
};

export default Button;
