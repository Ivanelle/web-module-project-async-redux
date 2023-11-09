import axios from "axios";

export const GET_JOKE = 'GET_JOKE';
export const GET_JOKE_SUCCESS = 'GET_JOKE_SUCCESS';
export const GET_JOKE_ERROR = 'GET_JOKE_ERROR';
export const SET_IS_GENERATING = 'SET_IS_GENERATING';

export const getJoke = () => dispatch => {
    dispatch(setIsGenerating(true))
    axios.get('https://official-joke-api.appspot.com/random_joke')
        .then((res) => {
            const joke = res.data.setup
            dispatch(getJokeSuccess(joke))
            dispatch(setIsGenerating(false));
        }, (error) ={

        })

    return {type: GET_JOKE, payload: {data: 'hello'}}
}

const setIsGenerating = (isGenerating) => {
    return {type: SET_IS_GENERATING, payload: isGenerating};
}

const getJokeSuccess = (joke) => {
    return {type: GET_JOKE_SUCCESS, payload: joke};
}

const getJokeError = (error) => {
    return {type: GET_JOKE_ERROR, payload: error.message}
}


