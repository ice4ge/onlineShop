import { products } from './initial';
import * as actions from '../actions/actionNames';

export const ProductsService = (state = [], action) => {
    switch (action.type) {
        case actions.TOTAL_PRODUCTS:
            return state = products;
        default:
            return state;
    }
}