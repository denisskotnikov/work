import {FETCH_PRODUCT, FETCH_PRODUCTS, SET_LOADING} from './productsTypes';
import axios from 'axios';
import BASE_URL from "../../config";

export const fetchProduct = (id) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await axios.get(`${BASE_URL}/products/${id}`);
        dispatch({
            type: FETCH_PRODUCT,
            payload: response.data[0],
        });
    } catch (error) {
        console.error(`Error fetching product with id ${id}`, error);
    } finally {
        dispatch(setLoading(false));
    }
};

export const fetchProducts = () => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await axios.get(`${BASE_URL}/products/all`);
        dispatch({
            type: FETCH_PRODUCTS,
            payload: response.data,
        });
    } catch (error) {
        console.error('Error fetching products', error);
    } finally {
        dispatch(setLoading(false));
    }
};

export const setLoading = (isLoading) => ({
    type: SET_LOADING,
    payload: isLoading,
});
