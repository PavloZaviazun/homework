import {ADD_PHRASE, REMOVE_PHRASE} from "./action-types";

const initialState = {
    phrases : []
}

export function reducer(state = initialState, action) {
    switch(action.type){
        case ADD_PHRASE :
            action.payload !== null && state.phrases.push(action.payload);
            return {...state};
        case REMOVE_PHRASE :
            let updatedPhrases = state.phrases.filter((value, index) => {
                if(index !== action.payload) return value;
            })
            state.phrases = updatedPhrases;
            return {...state};
        default :
            return state;
    }
}
