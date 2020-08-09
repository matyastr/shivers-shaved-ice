import React from 'react';
import ReactMarkdown from 'react-markdown';

import './PageHeader.scss';

const PageHeader = ({ heading, introduction }) => (
    <section className="page-header">
        <div className="container">
            <h1>{heading}</h1>
            {
                introduction && (
                    <p className="page-header-intro">
                        <ReactMarkdown source={introduction} />
                    </p>
                )
            }
        </div>
    </section>
);

export default PageHeader;
