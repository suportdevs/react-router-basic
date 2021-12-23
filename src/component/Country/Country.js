import React from 'react';
import {Link, useHistory} from 'react-router-dom';

const Country = (props) => {
    const {flag, name, alpha2Code, population} = props.conty;
    // console.log(props.conty);
    const history = useHistory();
    function handleDesh(countryName) {
        history.push(`country/${countryName}`);
    }
    return(
        <div>
            <img style={{height: '50px'}} src={flag} alt="" />
            <h4>{name} ({alpha2Code})</h4>
            <p>Total Population {population}</p>
            {/* <Link to={`/country/${name}`}>Show Details</Link> */}
            <button onClick={() => handleDesh(name)}>Click Me</button>
            <hr />
        </div>
    );
};
export default Country;