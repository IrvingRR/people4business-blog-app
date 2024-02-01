import { createContext, useReducer } from "react";
import { entriesInitialState, entriesReducer } from "../reducers/entriesReducer";
import { ACTIONS } from "../actions/entries";

export const EntriesContext = createContext();

export const EntriesProvider = ({children}) => {
    const [state, dispatch] = useReducer(entriesReducer, entriesInitialState);

    const readEntries = (data) => {
        dispatch({
            type: ACTIONS.READ_ENTRIES,
            payload: data
        });
    };

    const setLoading = (value) => {
        dispatch({
            type: ACTIONS.SET_LOADING,
            payload: value
        });
    };

    const addEntry = (entry) => {
        dispatch({
            type: ACTIONS.ADD_ENTRY,
            payload: entry
        });
    };

    const entriesState = {
        ...state,
        readEntries,
        addEntry,
        setLoading
    };

    return (
        <EntriesContext.Provider value={entriesState}>
            {children}
        </EntriesContext.Provider>
    );
};