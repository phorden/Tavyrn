import React from 'react';
import ReactPlayer from 'react-player';

interface Video {
    url: string
}

const VideoPlayer = (props: Video) => {
    return (
        <ReactPlayer url={props.url} controls={true} width="65%" height="40em" />
    );
};

export default VideoPlayer;