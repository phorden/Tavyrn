import React from 'react';
import VideoPlayer from '../../components/video-player/video-player';

interface Room {
    name: string;
    url: string;
}

const ViewingRoom = (props: Room) => {
    return (
        <div>
            <h2>Viewing Room</h2>
            <VideoPlayer url={props.url} />
        </div>
    );
}

export default ViewingRoom;