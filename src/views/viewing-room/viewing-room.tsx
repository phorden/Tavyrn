import React from 'react';
import VideoPlayer from '../../components/video-player/video-player';
import Chat from '../../components/chat/chat';
import './viewing-room.css';

interface Room {
    name: string;
    url: string;
}

const testData = {
    url: 'https://www.youtube.com/watch?v=tpiyEe_CqB4',
    name: 'cats, cats, cats'
}

const ViewingRoom = (props: Room) => {
    return (
        <div className="viewing-room">
            <h2>Viewing Room</h2>
            <div className="viewing-room-content">
                <VideoPlayer url={testData.url} />
                <Chat />
            </div>
            <h3>{testData.name}</h3>
        </div>
    );
}

export default ViewingRoom;