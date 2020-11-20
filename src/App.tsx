import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Lobby from './views/lobby/lobby';
import CreateRoom from './views/create-room/create-room';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <Link to="/">Lobby</Link>
            <Link to="/create-room">Create Viewing Room</Link>
          </nav>
        </header>
      </div>

      <Switch>
        <Route path='/create-room'>
          <CreateRoom />
        </Route>
        <Route path='/'>
          <Lobby />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
