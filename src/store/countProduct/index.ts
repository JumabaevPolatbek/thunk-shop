import { ActionCountProduct, CountProduct, Products } from "../types";


export const countProductReducer = (state:Products[]=[], action:ActionCountProduct) => {
    switch (action.type) {
        case CountProduct.ADD_PRODUCT:
            return [...state,{...action.payload,qty:1}]
        case CountProduct.INCREASE_PRODUCT:
            return [...state, state[action.payload].qty = 1 + state[action.payload].qty];
        case CountProduct.DECREASE_PRODUCT:
            if (state[action.payload].qty === 0) {
                return [...state, state.filter(product=>product.qty!==0)];
            } else {
                return [...state, state[action.payload].qty = state[action.payload].qty - 1];
            }
        case CountProduct.REMOVE_PRODUCT:
            return [...state, state.filter(product => product.id !== action.payload)];
        default:
            return state
    }
}