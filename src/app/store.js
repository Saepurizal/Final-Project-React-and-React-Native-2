import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/productSlice';
import authReducer from '../features/loginSlice';
import detailReducer from '../features/detailSlice';
import cartReducer from '../features/cartSlice';

export default configureStore({
  reducer: {
    product: productReducer,
    auth: authReducer,
    detail: detailReducer,
    cart: cartReducer
  }
});