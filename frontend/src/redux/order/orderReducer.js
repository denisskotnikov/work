import {CREATE_ORDER, GET_ORDER, SET_ORDER_ERROR, SET_ORDER_LOADING} from "./orderTypes";

const initialState = {
    currentOrder: null,
    orders: [],
    loading: false,
    error: null,
};

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ORDER:
            return {
                ...state,
                currentOrder: action.payload,
                error: null,
            };
        case GET_ORDER:
            return {
                ...state,
                orders: action.payload,
                error: null,
            };
        case SET_ORDER_LOADING:
            return {
                ...state,
                loading: action.payload,
            };
        case SET_ORDER_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default orderReducer;
