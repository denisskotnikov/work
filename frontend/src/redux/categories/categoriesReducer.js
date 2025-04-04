import {FETCH_CATEGORIES, FETCH_CATEGORY, SET_LOADING} from "./categoriesTypes";

const initialState = {
    items: [],
    item: null,
    isLoading: false,
};

const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES:
            return {
                ...state,
                items: action.payload,
            };

        case FETCH_CATEGORY:
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

export default categoriesReducer;
