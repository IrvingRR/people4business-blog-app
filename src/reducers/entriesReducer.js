import { ACTIONS } from "../actions/entries";

export const entriesInitialState = {
    entries: [],
    entry: {},
    isLoading: false
};

export const entriesReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.READ_ENTRIES: {
            return { ...state, entries: action.payload }
        };

        case ACTIONS.SET_LOADING: {
            return { ...state, isLoading: action.payload }
        };

        case ACTIONS.ADD_ENTRY: {
            return {
                ...state,
                entries: [...state.entries, action.payload]
            };
        };
    
        default:
            return state;
    };
};