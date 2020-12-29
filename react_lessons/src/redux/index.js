import {createStore} from "redux";
import {reducer} from "./reducers";
// import {setProducts} from "./action-creators";

export const store = createStore(reducer);
export * from "./action-creators";
export * from "./action-types";
