import React from 'react';
import './Country.css';

const Country = (props) => {
    const [name, flag,capital] = props.country;
    return (
        <div className="country">
            <h3>This is: {name}</h3>
            <img src={flag} alt="" />
            <p>Capital is: {capital}</p>
        </div>
    );
};

export default Country;