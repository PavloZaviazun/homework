import {SET_PRODUCTS} from "../action-types";

const initialState = {
    product : []
}

export const product = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS : {
            action.payload.map(item => state.product.push(item));
            return {...state}
        }
        default : {
            return state;
        }
    }
}
