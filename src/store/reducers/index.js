import { combineReducers } from 'redux';

import { ProductsService, ProductPreview } from './products';
import { CartReducer } from './cartReducer';

export default combineReducers({
    ProductsService,
    ProductPreview,
    CartReducer,
  })