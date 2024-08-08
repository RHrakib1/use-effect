import React from 'react';

const Friend = ({ friend }) => {
    const box = {
        border: '2px solid red',
        padding: '20px',
        margine: '10px',
        borderRadius: '10px'


    }
    const { title, id, body } = friend
    return (
        <div style={box}>
            <h2>id{id}</h2>
            <h3 >title:{title}</h3>
            <p>{body}</p>


        </div>
    );
};

export default Friend;