import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h2>Traveling Around the World !!!!!</h2>
            <h4>Countries Available: {countries.length}</h4>
            <div className="countries-container">
            {
                countries.map(country => <Country country={country}>       </Country>)
            }
            </div>
        </div>
    );
};


export default Countries;