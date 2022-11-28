import { combineReducers } from 'redux';
import { fetchAllReducer } from './fetchAll';
import { countProductReducer } from './countProduct';

export const rootReducer = combineReducers({
    getAllProducts: fetchAllReducer,
    countProduct:countProductReducer,
})