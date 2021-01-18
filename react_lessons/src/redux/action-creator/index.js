import {SET_SEARCH, SET_SEARCHPAGINATION, SET_SEARCHTEXT, SET_GENRES, SET_SEARCHLOAD} from "../action-type";

export const setSearch = (payload) => ({type: SET_SEARCH, payload});
export const setGenres = (payload) => ({type: SET_GENRES, payload});
export const setSearchLoad = (payload) => ({type: SET_SEARCHLOAD, payload});
export const setSearchPagination = (payload) => ({type: SET_SEARCHPAGINATION, payload});
export const setSearchText = (payload) => ({type: SET_SEARCHTEXT, payload});
