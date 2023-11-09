
import { 
    GET_JOKE, 
    SET_IS_GENERATING, 
    GET_JOKE_SUCCESS, 
    GET_JOKE_ERROR,
    TOGGLE_PUNCHLINE
} 
from "../actions";


const initialState = {
    joke: {
        setup: '',
        punchline: '',
        showPunchline: false,
    },
    isGenerating: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_JOKE:
            return state;

        case SET_IS_GENERATING:
            return {...state, isGenerating: action.payload};
        
        case GET_JOKE_SUCCESS:
            return {...state, joke: action.payload};

        case GET_JOKE_ERROR:
            return {...state, error: action.payload};

        case TOGGLE_PUNCHLINE:
            return {...state, joke: {...state.joke, showPunchline: !state.joke.showPunchline}}

        default: 
            return state;
    }
}