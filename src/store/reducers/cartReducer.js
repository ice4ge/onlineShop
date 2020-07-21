import * as actions from '../actions/actionNames';

export const CartReducer = (state = [], action) => {
    switch (action.type) {
        case actions.CART_ADD:
            return [...state, action.payLoad];
        case actions.CART_PRODUCT_DELETE:
            return state.filter(item => item.id != action.payLoad);
        case actions.CART_PRODUCTS_CLEAR:
            return state = [];
        default:
            return state;
    }
}
