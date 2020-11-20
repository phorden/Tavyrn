import React, { useEffect, useState } from 'react';
import './chat.css';

const userSamples = [
    'john123',
    'mMan46',
    'yearOfTheDog',
    'leetCode999',
    'extraCheeseAndBacon'
];

const textSamples = [
    {
        id: 0,
        value: 'random reponse'
    },
    {
        id: 1,
        value: 'I like trains!'
    },
    {
        id: 2,
        value: 'They are so cute!'
    },
    {
        id: 3,
        value: 'Can we watch something else? This isn\'t really my thing'
    },
    {
        id: 4,
        value: 'I am getting sleepy.'
    }
];

const Chat = () => {
    const [chatList, setChatList]: any = useState([{user: 'bob', text: {id: 5, value: 'hello, world!'}}]);

    const simulateChat = () => {
        const chatPostDelay = Math.floor(Math.random() * Math.floor(5000));

        const getTextIndex = Math.floor(Math.random() * Math.floor(textSamples.length - 1));
        const randomText = textSamples.find(text => text.id === getTextIndex);

        const getRandomUser: number = Math.floor(Math.random() * Math.floor(textSamples.length - 1));
        const randomUser = userSamples[getRandomUser];

        const addMessageToList = () => {
            const updatedChatList : object[] = [
                ...chatList,
                {user: randomUser, text: randomText}
            ];

            setChatList(updatedChatList);
        }

        setTimeout(() => {
            addMessageToList();


        }, chatPostDelay);
    };

    useEffect(() => {
        if (chatList.length) {
            simulateChat();
        }
    }, [chatList, simulateChat]);

    const messages = (
        <div>
            {
                chatList.map((message: any, index: number) => {
                    return (
                        <div className="message-wrapper" key={index}>
                            <h4 className="name">{message.user}</h4>
                            <p>{message.text.value}</p>
                        </div>
                    )
                })
            }
        </div>
    );

    return (
        <div className="chat-wrapper">
            <h4>Chat</h4>
            <div className="chat-container">
                {messages}
            </div>
        </div>
    );
};

export default Chat;