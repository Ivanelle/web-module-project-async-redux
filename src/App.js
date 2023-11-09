import React from 'react';
import './App.css';
import Joke from './components/Joke';


function App(props) {
  return (
    <div className="App" >
      <h1 className='typewriter'>What do you call a little joke generator?</h1>
      <h2>A mini haha..</h2>
      <Joke />
    </div>
  );
}

export default App;