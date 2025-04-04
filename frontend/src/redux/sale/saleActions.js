import axios from 'axios';
import BASE_URL from "../../config";
import {FETCH_SALE_DATA, POST_SALE_DATA, SALE_ERROR} from "./saleTypes";

export const fetchSaleData = () => async (dispatch) => {
    try {
        const response = await axios.get(`${BASE_URL}/sale/send`);
        dispatch({
            type: FETCH_SALE_DATA,
            payload: response.data,
        });
    } catch (error) {
        console.error('Error fetching sale data', error);
        dispatch({
            type: SALE_ERROR,
            payload: error.message,
        });
    }
};

export const sendSaleData = (saleData) => async (dispatch) => {
    try {
        const response = await axios.post(`${BASE_URL}/sale/send`, saleData);
        dispatch({
            type: POST_SALE_DATA,
            payload: response.data,
        });
    } catch (error) {
        console.error('Error posting sale data', error);
        dispatch({
            type: SALE_ERROR,
            payload: error.message,
        });
    }
};
