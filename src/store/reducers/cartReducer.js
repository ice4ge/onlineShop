import React from 'react';
import * as actions from '../actions/actionNames';

export const CartReducer = (state = [], action) => {
    switch (action.type) {
        case actions.CART_ADD:
            return [...state, action.payLoad];
        default:
            return state;
    }
}
