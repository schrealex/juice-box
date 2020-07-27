import React from 'react';
import logo from './logo.svg';
import './App.css';
import Photogrid from './Photogrid.js';


function App() {
  const { useRef } = React;

  const queryInput = useRef(null);

  const searchPhotos = e => {
    e.preventDefault();
    // setQuery(queryInput.current.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <form
        id="unsplash-search"
        className="unsplash-search form"
        onSubmit={searchPhotos}
      >
        <label>
          Search Photos on Unsplash
          <input
            ref={queryInput}
            placeholder="Try 'dogs' or 'coffee'!"
            type="search"
            className="input"
            defaultValue=""
            style={{ marginBottom: 20 }}
          />
        </label>
      </form>
      <Photogrid name="John" />
    </div>
  );
}

export default App;
