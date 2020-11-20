import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import RoomListItem from '../../components/room-list-item/room-list-item';

interface Room {
    name: string;
    id: string;
    url: string;
    goToRoom: Function;
}

const Lobby = (props: any) => {
    const [ rooms ] = useState(props);

    return (
        <div>
            <h1>Lobby</h1>
            <div>
            {
                rooms.map((room: Room) => {
                    return (
                        <RoomListItem
                            onClick={room.goToRoom(room)} 
                            key={room.id}
                            name={room.name}
                            id={room.id} />
                    );
                })
            }
        </div>
        </div>
    );
}

export default Lobby;