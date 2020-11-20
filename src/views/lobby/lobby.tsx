import React, { useEffect, useState } from 'react';
import RoomListItem from '../../components/room-list-item/room-list-item';

interface Room {
    name: string;
    id: string;
    url: string;
}

const Lobby = (props: any) => {
    const [ rooms ] = useState(props.list);
    const [activeRoom, setActiveRoom] = useState('');

    useEffect(() => {
        console.log("room id: ", activeRoom);
        props.currentRoom(activeRoom);
    });

    const updateRoom = (event: Event, id: string) => {
        event.preventDefault();
        setActiveRoom(id);
    }

    return (
        <div>
            <h1>Lobby</h1>
            <div>
            {
                rooms.map((room: Room) => {
                    return (
                        <RoomListItem
                            onClick={(e: Event) => updateRoom(e, room.id)} 
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