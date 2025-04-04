import {FETCH_PRODUCT, FETCH_PRODUCTS, SET_LOADING} from './productsTypes';

const initialState = {
    items: [],
    item: null,
    isLoading: false,
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                items: action.payload,
            };

        case FETCH_PRODUCT:
            return {
                ...state,
                item: action.payload,
            };

        case SET_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            };

        default:
            return state;
    }
};

export default productsReducer;
