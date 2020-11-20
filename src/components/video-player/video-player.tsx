import React from 'react';
import ReactPlayer from 'react-player';

interface Video {
    url: string
}

const VideoPlayer = (props: Video) => {
    return (
        <ReactPlayer url={props.url} />
    );
};

export default VideoPlayer;