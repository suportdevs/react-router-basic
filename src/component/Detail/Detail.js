import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
    const {detail_id} = useParams();
    const [detail, setDetail] = useState([]);
    console.log(detail);
    useEffect( () => {
        const url = `https://jsonplaceholder.typicode.com/users/${detail_id}`;
        fetch(url)
        .then(response => response.json())
        .then(data => setDetail(data))
    }, [])
    return (
        <div>
            <p>Detail Id: {detail_id}</p>
            <h3>Name: {detail.name}</h3>
            <p>Email: {detail.email}</p>
            <p>Phone: {detail.phone}</p>
            <p>Website: {detail.website}</p>
        </div>
    );
};
export default Detail;