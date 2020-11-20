import React from 'react';

interface Room {
    name: string;
}

const RoomListItem = (props: Room) => {
    const getCurrentRoomCount = (max: number) => {
        return Math.floor(Math.random() * Math.floor(max));
    }

    const totalRoomCount: number = 500;
    const currentRoomCount: number = getCurrentRoomCount(totalRoomCount);

    return (
        <div>
            <h3>{props.name}</h3>
            <h4>{currentRoomCount}/{totalRoomCount}</h4>
        </div>
    );
};

export default RoomListItem;