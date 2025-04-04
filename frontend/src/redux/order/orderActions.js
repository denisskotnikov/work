import axios from 'axios';
import {CREATE_ORDER, GET_ORDER, SET_ORDER_ERROR, SET_ORDER_LOADING} from "./orderTypes";
import BASE_URL from "../../config";

export const setOrderLoading = (loading) => ({
    type: SET_ORDER_LOADING,
    payload: loading,
});

export const setOrderError = (error) => ({
    type: SET_ORDER_ERROR,
    payload: error,
});

export const createOrder = (orderData) => async (dispatch) => {
    dispatch(setOrderLoading(true));
    try {
        const response = await axios.post(`${BASE_URL}/order/send`, orderData);
        dispatch({
            type: CREATE_ORDER,
            payload: response.data,
        });
    } catch (error) {
        console.error('Error creating order:', error);
        dispatch(setOrderError(error.message));
    } finally {
        dispatch(setOrderLoading(false));
    }
};

export const getOrder = () => async (dispatch) => {
    dispatch(setOrderLoading(true));
    try {
        const response = await axios.get(`${BASE_URL}/order/send`);
        dispatch({
            type: GET_ORDER,
            payload: response.data,
        });
    } catch (error) {
        console.error('Error fetching order:', error);
        dispatch(setOrderError(error.message));
    } finally {
        dispatch(setOrderLoading(false));
    }
};
