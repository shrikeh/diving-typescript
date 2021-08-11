import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Equipment } from '~components/Equipment';
import './App.css';

export function App(): JSX.Element {
  return (
    <React.Fragment>
      <CssBaseline />
      <div className="App">
        <header className="App-header">
          <Equipment />
          <img className="App-logo" alt="logo" />
          <p>
            Edit
            {' '}
            <code>src/App.tsx</code>
            {' '}
            and save to reload.
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
    </React.Fragment>
  );
}

export default App;
