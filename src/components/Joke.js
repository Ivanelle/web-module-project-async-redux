import React from 'react';
import { connect } from 'react-redux';
import { getJoke } from '../actions'

const Joke = (props) => {

  if (props.error) {
    return <h2>{error}</h2>
  }

  if (props.isGenerating) {
    return <h2>Joke Incoming...</h2>
  }

  return (
    <>
      <div>
      <button onClick={() => props.getJoke()}>Another Mini Haha</button>
      </div>
      <button>Punchline!</button>
      
    </>
  )
}

const mapStateToProps = state => {
    return {
      joke:  state.joke,
      isGenerating: state.isGenerating,
      error: state.error
    };
  };

  export default connect(mapStateToProps, {getJoke})(Joke);