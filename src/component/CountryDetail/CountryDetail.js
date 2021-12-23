import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
    const {countryName} = useParams();
    console.log(countryName);
    const [desh, setDesh] = useState([]);
    console.log(desh);
    useEffect( () => {
        const url = `https://restcountries.com/v2/name/Bangladesh`;
        fetch(url)
        .then(response => response.json())
        .then(data => setDesh(data))
    }, []);

    return (
        <div>
            {
                desh.map(desh => (
                    <div>
                    <h2>Country Detail</h2>
                    <p>{countryName}</p>
                    <p>Population {desh.population}</p>
                    <img style={{width: '50px'}} src={desh.flag} alt="" />
                    </div>
                ))
            }
            
            
        </div>
    );
};
export default CountryDetail;