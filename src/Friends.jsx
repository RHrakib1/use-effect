import React, { useEffect, useState } from 'react';
import Friend from './Friend';

const Friends = () => {
    const [post, setpost] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setpost(data))

    }, [])
    return (
        <div>
            <h2>friend:{post.length}</h2>
            {
                post.map(posts => <Friend friend={posts}></Friend>)
            }
        </div>
    );
};

export default Friends;