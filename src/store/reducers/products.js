import { products } from './initial';
import * as actions from '../actions/actionNames';

const store = firebase.firestore();

export const ProductsService = (state = [], action) => {
    switch (action.type) {
        case actions.TOTAL_PRODUCTS:
            return state = products;
        default:
            return state;
    }
}

export const ProductPreview = (state = {}, action) => {
    switch (action.type) {
        case actions.PREVIEW_CHANGE:
            return products[2];
        case actions.PREVIEW_SET:
            return ({...action.payLoad})
        default:
            return state;
    }
}
