import React from 'react';
import './App.css';
import { Equipment } from '~components/Equipment';

export function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" alt="logo" />
        <p>
          Edit
          {' '}
          <code>src/App.tsx</code>
          {' '}
          and save to reload.
        </p>
        <Equipment />
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
