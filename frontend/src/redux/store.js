import {combineReducers, configureStore} from '@reduxjs/toolkit';
import productsReducer from './products/productsReducer';
import categoriesReducer from "./categories/categoriesReducer";
import saleReducer from "./sale/saleReducer";
import orderReducer from "./order/orderReducer";
import cartReducer from "./cart/cartReducer";

const store = configureStore({
    reducer: combineReducers({
        categories: categoriesReducer,
        products: productsReducer,
        order: orderReducer,
        sale: saleReducer,
        cart: cartReducer,
    }),
});

export default store;
