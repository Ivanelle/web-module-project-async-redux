import React from 'react';
import { connect } from 'react-redux';
import { getJoke, togglePunchline } from '../actions'

const Joke = (props) => {
const { punchline, showPunchline, setup } = props;

  if (props.error) {
    return <h2>{props.error}</h2>
  }

  if (props.isGenerating) {
    return <h2>Joke Incoming...</h2>
  }

  return (
     <div>
      <div>
        <h1>{setup}</h1>
      <button onClick={() => props.getJoke()}>🤪More Mini Haha🤪</button>
      </div>
      <button onClick={() => props.togglePunchline()}>{showPunchline ? '💢Hide Punchline💢' : '💢Punchline💢' }</button>
          {showPunchline && <h1>{punchline}</h1>}
     
      
      </div>
    )
  };


const mapStateToProps = state => {
    return {
      setup: state.joke.setup,
      punchline: state.joke.punchline,
      showPunchline: state.joke.showPunchline,
      isGenerating: state.isGenerating,
      error: state.error
    };
  };

  export default connect(mapStateToProps, { getJoke, togglePunchline })(Joke);