import React from "react"
import { State } from "../selectsState"
import { CountProduct, Products } from "../types"

export const add = (product:Products) => {
    return {
        type: CountProduct.ADD_PRODUCT,
        payload:product
    }
}
export const increase = (id: number) => {
    return {
        type: CountProduct.INCREASE_PRODUCT,
        payload:id
    }
}
export const decrease = (id: number) => {
    return {
        type: CountProduct.DECREASE_PRODUCT,
        payload:id
    }
}
export const remove = (id: number) => {
    return {
        type: CountProduct.REMOVE_PRODUCT,
        payload:id
    }
}
export const countProduct = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>,id:number) => {
    return function (dispatch: (arg0: { type: CountProduct; payload: number }) => void) {
        switch (event.currentTarget.ariaLabel) {
            case 'increase':
                dispatch(increase(id));
                break;
            case 'decrease':
                dispatch(decrease(id));
                break;
            case 'remove':
                dispatch(remove(id));
                break;
        }
    }
}
export const addProduct = (product:Products):any => {
    return function (dispatch: (arg0: { type: CountProduct; payload: Products }) => void) {
        dispatch(add(product))
    }
}

