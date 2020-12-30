import {ADD_PHRASE, REMOVE_PHRASE} from "../action-types";

export const addPhrase = (payload) => ({type: ADD_PHRASE, payload});
export const removePhrase = (payload) => ({type: REMOVE_PHRASE, payload});
