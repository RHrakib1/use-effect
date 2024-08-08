import React from 'react';

const Album = ({ tPic }) => {
    const albumStyle={
        border:'2px solid blue'

    }
    const { id, title, url, thumbnailUrl } = tPic
    return (
        <div style={albumStyle}>
            <h2>ID:{id}</h2>
            <h3>{title}</h3>
            <h3>{url}</h3>
            <h3>{thumbnailUrl}</h3>

        </div>
    );
};

export default Album;