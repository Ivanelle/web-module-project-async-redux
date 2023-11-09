import React from 'react';
import './App.css';
import Joke from './components/Joke';


function App(props) {
  return (
    <div className="App">
      <h1>Mini Haha Generator</h1>
      <Joke />
    </div>
  );
}

export default App;