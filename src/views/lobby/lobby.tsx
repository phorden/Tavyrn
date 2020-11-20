import React, { useState } from 'react';

const mockData = {
    roomList: [
        {
            id: 'user1@gmail.com',
            roomName: 'cats, cats, cats',
            url: 'https://www.youtube.com/watch?v=tpiyEe_CqB4'
        },
        {
            id: 'user2@yahoo.com',
            roomName: 'React for Beginners',
            url: 'https://www.youtube.com/watch?v=Ke90Tje7VS0'
        },
        {
            id: 'user3@msn.com',
            roomName: 'Movie Trailers 2021',
            url: 'https://www.youtube.com/watch?v=59GzfGLqL7k'
        },
        {
            id: 'user4@gmail.com',
            roomName: 'memes',
            url: 'https://www.youtube.com/watch?v=rk3-Av1KblM'
        },
        {
            id: 'user5@gmail.com',
            roomName: 'Not The Future!',
            url: 'https://www.youtube.com/watch?v=k9tgLnI0fFc'
        }
    ]
};

interface Rooms {
    id: string;
    roomName: string;
    url: string
}

const Lobby = () => {
    const [ roomList ] = useState(mockData.roomList);

    return (
        <h1>Lobby</h1>
    );
}

export default Lobby;