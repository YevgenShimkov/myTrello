import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import Board from './pages/Board/Board';
import './App.css';

function App(): JSX.Element {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                  Learn React
                </a>
              </header>
            </div>
          </Route>
          <Route path="/board">
            <Board />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
