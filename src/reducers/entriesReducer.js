import { ACTIONS } from "../actions/entries";

export const entriesInitialState = {
    entries: [],
    entry: {},
    results: [],
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
            console.log('ADD ENTRY:', action.payload);
            return {
                ...state,
                entries: [...state.entries, action.payload],
                results: [...state.results, action.payload],
            };
        };

        case ACTIONS.SET_ENTRY: {
            return {
                ...state,
                entry: action.payload
            };
        };

        case ACTIONS.UPDATE_ENTRY: {
            const entriesUpdated = state.entries.map(entry => {
                if(entry.id === action.payload.id) {
                    return action.payload
                } else {
                    return entry;
                }
            });

            return {
                ...state,
                entries: entriesUpdated,
                results: entriesUpdated
            };
        };

        case ACTIONS.REMOVE_ENTRY: {
            const entriesAfterRemoved = state.entries.filter(entry => entry.id !== action.payload);
            return {
                ...state,
                entries: entriesAfterRemoved,
                results: entriesAfterRemoved
            };
        };

        case ACTIONS.SET_RESULTS: {
            return {
                ...state,
                results: action.payload
            };
        };
    
        default:
            return state;
    };
};