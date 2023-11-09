

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
        default: 
            return state;
    }
}