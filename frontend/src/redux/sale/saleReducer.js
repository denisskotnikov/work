import {FETCH_SALE_DATA, POST_SALE_DATA, SALE_ERROR} from "./saleTypes";

const initialState = {
    saleData: null,
    responseMessage: null,
    error: null,
};

const saleReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SALE_DATA:
            return { ...state, saleData: action.payload, error: null };
        case POST_SALE_DATA:
            return { ...state, responseMessage: action.payload, error: null };
        case SALE_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

export default saleReducer;
