import { ActionsFetch, FetchCategoriesAll } from "../types";

const defaultSate = {
    data: [],
    currentPage: 1,
    productShows: 6,
    showsData:[]
}
export const fetchAllReducer = (state=defaultSate, action:ActionsFetch) => {
    switch (action.type) {
        case FetchCategoriesAll.SET_FETCHED_CATEGORIES:
            return { ...state, data: action.payload }
        case FetchCategoriesAll.PAGINATE_CATEGORIES:
            return { ...state, showsData: state.data.slice(action.firstIndex, action.lastIndex) }
        case FetchCategoriesAll.SET_CURRENT_PAGE:
            return {...state,currentPage:action.payload}
        default:
            return state
    }
}