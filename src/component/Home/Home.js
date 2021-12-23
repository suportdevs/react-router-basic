import React, {useState, useEffect} from 'react';
import Friend from '../Friend/Friend';

const Home = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        // const url = `https://jsonplaceholder.typicode.com/users/${}`
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUser(data))
    }, [])
    return (
        <div>
            <h3>Name: {users.length}</h3>
            {
                users.map(user => <Friend user={user} key={user.id}></Friend>)
            }
        </div>
    );
};
export default Home;