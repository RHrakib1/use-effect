import React, { useEffect, useState } from 'react';
import Album from './Album';

const Albums = () => {
    const albumStyle={
        border:'2px solid blue'

    }
    const [albums, setalbums] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
            .then(data => setalbums(data))
    }, [])
    return (
        <div style={albumStyle}> 
            <h1 >ALBUMS</h1>
            {
                albums.map(picture=><Album tPic={picture}></Album>)
            }

        </div>
    );
};

export default Albums;