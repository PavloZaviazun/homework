import {combineReducers} from "redux";
import {search} from "./search";
import {genres} from "./genres";
import {searchLoad} from "./searchLoad";
import {searchPagination} from "./searchPagination";
import {searchText} from "./searchText";
import {sortList} from "./sortList";

export const reducers = combineReducers({
    search,
    genres,
    searchLoad,
    searchPagination,
    searchText,
    sortList
})
