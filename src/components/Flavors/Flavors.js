import React from 'react';

import flavorsData from '../../templates/data/flavors.json';
import './Flavors.scss';

const Flavors = () => {
    if (!flavorsData || !flavorsData.flavors.length) {
        return null;
    }

    const { flavors } = flavorsData;

    return (
        <section className="flavors">
            <div className="container">
                <div className="flavors-header">
                    <img className="flavors-image" src="/img/logo-flat-blue.svg" alt="Ice cream cones" />
                    <h3 className="flavors-title font-secondary">
                        {
                            `${flavors.length === 1 ? 'Flavor' : 'Flavors'} of the week`
                        }
                    </h3>
                </div>
                <ul className="flavors-list">
                    {
                        flavors.map(({ flavor }) => (
                            <li key={flavor}>{flavor}</li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
};

export default Flavors;
