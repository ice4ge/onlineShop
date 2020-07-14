import React from 'react';
import * as actions from '../actions/actionNames';

export const CartReducer = (state = [], action) => {
    switch (action.type) {
        case actions.CART_ADD:
            console.log('reducer add cart======', action.payLoad);
            return [...state, action.payLoad];
        default:
            return state;
    }
}
