import React, { useCallback, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import Lobby from './views/lobby/lobby';
import CreateRoom from './views/create-room/create-room';
import ViewingRoom from './views/viewing-room/viewing-room';

const listData = [
  {
      id: 'user1@gmail.com',
      name: 'cats, cats, cats',
      url: 'https://www.youtube.com/watch?v=tpiyEe_CqB4'
  },
  {
      id: 'user2@yahoo.com',
      name: 'React for Beginners',
      url: 'https://www.youtube.com/watch?v=Ke90Tje7VS0'
  },
  {
      id: 'user3@msn.com',
      name: 'Movie Trailers 2021',
      url: 'https://www.youtube.com/watch?v=59GzfGLqL7k'
  },
  {
      id: 'user4@gmail.com',
      name: 'memes',
      url: 'https://www.youtube.com/watch?v=rk3-Av1KblM'
  },
  {
      id: 'user5@gmail.com',
      name: 'Not The Future!',
      url: 'https://www.youtube.com/watch?v=k9tgLnI0fFc'
  }
];

const App = () => {
  const [roomList] = useState(listData);
  const [currentRoomId] = useState('');
  const [currentRoomName, setCurrentRoomName] = useState('');
  const [currentVideoUrl, setCurrentVideoUrl] = useState('');

  const updateRoomId = useCallback(
    () => {
      // event.preventDefault();
      const activeRoom = roomList.find(room => room.id === currentRoomId);

      if (activeRoom) {
        setCurrentRoomName(activeRoom.name);
        setCurrentVideoUrl(activeRoom.url);
      }  
    },
    [roomList, currentRoomId]
  )

  return (
    <Router>
      <div className="App">
        <div className="App-wrapper">
          <header className="App-header">
            <nav>
              <Link to="/">Lobby</Link>
              <Link to="/create-room">Create Viewing Room</Link>
            </nav>
          </header>
        

        <Switch>
          <Route path='/create-room'>
            <CreateRoom />
          </Route>
          <Route path='/viewing-room/:id'>
            <ViewingRoom name={currentRoomName} url={currentVideoUrl} />
          </Route>
          <Route path='/'>
            <Lobby list={roomList} currentRoom={updateRoomId} />
          </Route>
        </Switch>
    
        </div>
      </div>
    </Router>
  );
}

export default App;
