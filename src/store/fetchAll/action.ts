import { State } from "../selectsState"
import { FetchCategoriesAll, Products } from "../types"



export const fetchedCategories = (payload:Products[]) => {
    return {
        type: FetchCategoriesAll.SET_FETCHED_CATEGORIES,
        payload:payload
    }
}

export const paginateCategories = (firstIndex: number, lastIndex: number): any => {
    if (lastIndex > 18) {
        return {
            type: FetchCategoriesAll.PAGINATE_CATEGORIES,
            firstIndex,
            lastIndex:20
        }
    }
    else {
        return {
            type: FetchCategoriesAll.PAGINATE_CATEGORIES,
            firstIndex,
            lastIndex
        }
    }
}

export const currentPage = (index: number) => {
    return {
        type: FetchCategoriesAll.SET_CURRENT_PAGE,
        payload:index
    }
}
//Pagination
export const setCurrentPage = (index: number):any => {
    return function (dispatch: (arg0: { type: FetchCategoriesAll; payload: Products[]|number }) => void, getState: () => State) {
        var lastIndex:number = getState().getAllProducts.currentPage * getState().getAllProducts.productShows;
        var firstIndex: number = lastIndex - getState().getAllProducts.productShows
        console.log(firstIndex)
        console.log(lastIndex)
        dispatch(currentPage(index))
        dispatch(paginateCategories(firstIndex,lastIndex))
    }
}

export const asyncAction = ():any => {
    return function (dispatch: (arg0: { type: FetchCategoriesAll; payload: Products[] }) => void,getState: () => State) {
        var lastIndex:number = getState().getAllProducts.currentPage * getState().getAllProducts.productShows;
        var firstIndex: number = lastIndex - getState().getAllProducts.productShows
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json => dispatch(fetchedCategories(json)))
        
        setTimeout(() => {
            dispatch(paginateCategories(firstIndex,lastIndex))
        },1000)
    }
}


