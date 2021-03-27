import React from 'react';
import logo from './logo.svg';
import './App.css';

import { dropbox, dropboxAuth } from './api/dropbox'


async function onClick() {
  if (dropbox === null) {
    const authUrl = String(await dropboxAuth.getAuthenticationUrl('http://localhost:3000/'))
    window.open(authUrl)
    return
  }

}

function App() {
  return (
    <div className="App" onClick={onClick}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
