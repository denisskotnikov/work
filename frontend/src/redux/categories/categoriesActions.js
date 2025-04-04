import axios from 'axios';
import BASE_URL from "../../config";
import {FETCH_CATEGORIES, FETCH_CATEGORY, SET_LOADING} from "./categoriesTypes";

export const fetchCategory = (id) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await axios.get(`${BASE_URL}/categories/${id}`);
        dispatch({
            type: FETCH_CATEGORY,
            payload: response.data,
        });
    } catch (error) {
        console.error(`Error fetching category with id ${id}`, error);
    } finally {
        dispatch(setLoading(false));
    }
};

export const fetchCategories = () => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await axios.get(`${BASE_URL}/categories/all`);
        dispatch({
            type: FETCH_CATEGORIES,
            payload: response.data,
        });
    } catch (error) {
        console.error('Error fetching categories', error);
    } finally {
        dispatch(setLoading(false));
    }
};

export const setLoading = (isLoading) => ({
    type: SET_LOADING,
    payload: isLoading,
});
