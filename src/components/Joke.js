import React from 'react';
import { connect } from 'react-redux';
import { getJoke } from '../actions'

const Joke = (props) => {
const { punchline, showPunchline, setup } = props;

  if (props.error) {
    return <h2>{error}</h2>
  }

  if (props.isGenerating) {
    return <h2>Joke Incoming...</h2>
  }

  return (
     <>
      <div>
        <h3>{props.joke.setup}</h3>
      <button onClick={() => props.getJoke()}>🤪Another Mini Haha🤪 </button>
      </div>
      <button>💢Punchline💢</button>
        <h1>
          {showPunchline && {punchline}}
        </h1>
      
      </>
    )
  };


const mapStateToProps = state => {
    return {
      joke:  state.joke,
      isGenerating: state.isGenerating,
      error: state.error
    };
  };

  export default connect(mapStateToProps, {getJoke})(Joke);