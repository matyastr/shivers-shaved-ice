import React from 'react';

import addressData from '../../templates/data/address.json';

const Address = () => (
    <>
        {
            addressData.address.map(({ line }, i) => (
                <>
                    <span>{ line }</span>
                    { i < (addressData.address.length - 1) && <br />}
                </>
            ))
        }
    </>
);

export default Address;
