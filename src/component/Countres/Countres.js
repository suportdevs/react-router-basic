import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countres = () => {
    const [country, setCountry] = useState([]);
    useEffect( () => {
        fetch('https://restcountries.com/v2/all')
        .then(response => response.json())
        .then(data => setCountry(data))
    }, [])
    return(
        <div>
            <h3>Total country: {country.length}</h3>
            {
                country.map(conty => <Country conty={conty} key={conty.alpha3Code}></Country>)
            }
        </div>
    );
};
export default Countres;