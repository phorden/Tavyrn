import React, { useState, useEffect } from 'react';
import './room-list-item.css';

interface RoomListItem {
    id: string
    name: string;
    onClick: void;
}

const RoomListItem = (props: RoomListItem) => {
    const [currentRoom, setCurrentRoom] = useState('')
    const getCurrentRoomCount = (max: number) => {
        return Math.floor(Math.random() * Math.floor(max));
    }

    const totalRoomCount: number = 500;
    const currentRoomCount: number = getCurrentRoomCount(totalRoomCount);

    useEffect(() => {
        if (currentRoom !== null) {
            
        }
    });

    return (
        <div className="room-list-item" onClick={() => setCurrentRoom(props.id)}>
            <h3>{props.name}</h3>
            <h4>{currentRoomCount}/{totalRoomCount}</h4>
        </div>
    );
};

export default RoomListItem;