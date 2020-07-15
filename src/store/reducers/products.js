import * as actions from '../actions/actionNames';

let productsList = [];
export const ProductsService = (state = [], action) => {
    switch (action.type) {
        case actions.TOTAL_PRODUCTS:
            return state = action.payLoad;
    }
    return state;
}



export const ProductPreview = (state = {}, action) => {
    switch (action.type) {
        case actions.PREVIEW_CHANGE:
            return state;
        case actions.PREVIEW_SET:
            return ({ ...action.payLoad })
        default:
            return state;
    }
}
