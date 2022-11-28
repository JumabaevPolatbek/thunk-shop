import { Products } from "./types"

export type State = {
    getAllProducts :{
        data: Products[],
        loading: boolean,
        currentPage: number,
        productShows: number,
        showsData:Products[]
    },
    countProduct:Products[]
}
export const data = (state: State) => state.getAllProducts

export const countProducts = (state:State)=>state.countProduct