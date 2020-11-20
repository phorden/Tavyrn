import React from 'react';
import './room-list-item.css';

interface RoomListItem {
    name: string;
}

const RoomListItem = (props: RoomListItem) => {
    const getCurrentRoomCount = (max: number) => {
        return Math.floor(Math.random() * Math.floor(max));
    }

    const totalRoomCount: number = 500;
    const currentRoomCount: number = getCurrentRoomCount(totalRoomCount);

    return (
        <div className="room-list-item">
            <h3>{props.name}</h3>
            <h4>{currentRoomCount}/{totalRoomCount}</h4>
        </div>
    );
};

export default RoomListItem;