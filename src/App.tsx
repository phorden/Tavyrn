import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import Lobby from './views/lobby/lobby';
import CreateRoom from './views/create-room/create-room';

const App = () => {
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
          <Route path='/'>
            <Lobby />
          </Route>
        </Switch>
    
        </div>
      </div>
    </Router>
  );
}

export default App;
