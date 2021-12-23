import React from 'react';
import {Link, useHistory} from 'react-router-dom';

const Friend = (props) => {
    const {id, name, email} = props.user;
    const history = useHistory();

    function handleClick(detailId) {
        history.push(`/detail/${detailId}`)
    }

    return (
        <div>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <Link to={`/detail/${id}`}>Details of id {id}</Link>
            <button onClick={() =>handleClick(id)}>Click Me</button>
        </div>
    );
};
export default Friend;