
export enum FetchCategoriesAll{
    SET_FETCHED_CATEGORIES = 'SET_FETCHED_CATEGORIES',
    PAGINATE_CATEGORIES = 'PAGINATE_CATEGORIES',
    SET_CURRENT_PAGE='SET_CURRENT_PAGE'
};

export type Products = {
    id: number,
    title: string,
    category: string,
    image: string,
    description: string,
    price: number,
    rating: {
        rate: number,
        count:number
    },
    qty?:number|any
}

export type SetFetchApi = {
    type: FetchCategoriesAll.SET_FETCHED_CATEGORIES,
    payload:Products[]
}
export type PaginateFetchedApi = {
    type: FetchCategoriesAll.PAGINATE_CATEGORIES,
    firstIndex: number,
    lastIndex:number
}
export type SetCurrentPage = {
    type: FetchCategoriesAll.SET_CURRENT_PAGE,
    payload:number
}
export type ActionsFetch =  SetFetchApi |SetCurrentPage | PaginateFetchedApi

export type PaginateProduct = {
    currentPage: number,
    productShows: number,
    data:Products[]
}


export enum CountProduct{
    ADD_PRODUCT = 'ADD_PROCUT',
    INCREASE_PRODUCT = 'INCREASE_PRODUCT',
    DECREASE_PRODUCT = 'DECREASE_PRODUCT',
    REMOVE_PRODUCT='REMOVE_PRODUCT'
}

export type AddProduct = {
    type: CountProduct.ADD_PRODUCT,
    payload:Products
}

export type IncreaseProduct = {
    type: CountProduct.INCREASE_PRODUCT,
    payload:number
}

export type DecreaseProduct = {
    type: CountProduct.DECREASE_PRODUCT,
    payload:number
}
export type RemoveProduct = {
    type: CountProduct.REMOVE_PRODUCT,
    payload:number
}

export type ActionCountProduct=AddProduct|IncreaseProduct|DecreaseProduct|RemoveProduct