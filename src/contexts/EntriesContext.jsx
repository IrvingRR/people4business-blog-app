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

    const setEntry = (entry) => {
        dispatch({
            type: ACTIONS.SET_ENTRY,
            payload: entry
        });
    };

    const updateEntry = (entry) => {
        dispatch({
            type: ACTIONS.UPDATE_ENTRY,
            payload: entry
        });
    };

    const removeEntry = (id) => {
        dispatch({
            type: ACTIONS.REMOVE_ENTRY,
            payload: id
        });
    };

    const setResults = (results) => {
        dispatch({
            type: ACTIONS.SET_RESULTS,
            payload: results
        });
    };

    const entriesState = {
        ...state,
        readEntries,
        addEntry,
        setEntry,
        updateEntry,
        removeEntry,
        setResults,
        setLoading
    };

    return (
        <EntriesContext.Provider value={entriesState}>
            {children}
        </EntriesContext.Provider>
    );
};