import { ACTIONS } from "../actions/entries";

export const entriesInitialState = {
    entries: [],
    entry: {},
};

export const entriesReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.READ_ENTRIES: {
            console.log('Action READ_ENTRIES...');
            return state
        };
    
        default:
            return state;
    };
};