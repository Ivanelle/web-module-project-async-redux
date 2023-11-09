import axios from "axios";

export const GET_JOKE = 'GET_JOKE';
export const GET_JOKE_SUCCESS = 'GET_JOKE_SUCCESS';
export const GET_JOKE_ERROR = 'GET_JOKE_ERROR';

export const TOGGLE_PUNCHLINE = 'TOGGLE_PUNCHLINE'
export const SET_IS_GENERATING = 'SET_IS_GENERATING';

const URL = 'https://official-joke-api.appspot.com/random_joke'

export const getJoke = () => dispatch => {
    dispatch(setIsGenerating(true));

    axios.get(URL)
        .then((res) => {
            const joke = {
                setup: res.data.setup,
                punchline: res.data.punchline,
                showPunchline: false
            };
        
            dispatch(getJokeSuccess(joke))
            dispatch(setIsGenerating(false));
        }), (error) => {
            dispatch(getJokeError(error))
        };
    };

const setIsGenerating = (isGenerating) => {
    return {type: SET_IS_GENERATING, payload: isGenerating};
};

const getJokeSuccess = (joke) => {
    return {type: GET_JOKE_SUCCESS, payload: joke};
};

const getJokeError = (error) => {
    return {type: GET_JOKE_ERROR, payload: error.message};
};

export const togglePunchline = () => {
    return {type: TOGGLE_PUNCHLINE};
};


