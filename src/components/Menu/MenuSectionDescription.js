import React from 'react';
import ReactMarkdown from 'react-markdown';

import './MenuSectionDescription.scss';

const MenuSectionDescription = ({ description }) => (
    <div className="menu-section-description">
        <ReactMarkdown source={description} />
    </div>
);

export default MenuSectionDescription;
