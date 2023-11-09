
import { 
    GET_JOKE, 
    SET_IS_GENERATING, 
    GET_JOKE_SUCCESS, 
    GET_JOKE_ERROR 
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
        case SET_IS_GENERATING:
            return {...state, isGenerating: action.payload}

        default: 
            return state;
    }
}