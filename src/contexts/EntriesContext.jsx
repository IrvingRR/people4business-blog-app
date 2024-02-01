import { createContext, useReducer } from "react";
import { entriesInitialState, entriesReducer } from "../reducers/entriesReducer";
import { ACTIONS } from "../actions/entries";

export const EntriesContext = createContext();

export const EntriesProvider = ({children}) => {
    const [state, dispatch] = useReducer(entriesReducer, entriesInitialState);

    const readEntries = () => {
        dispatch({
            type: ACTIONS.READ_ENTRIES
        });
    }

    const entriesState = {
        ...state,
        readEntries
    };

    return (
        <EntriesContext.Provider value={entriesState}>
            {children}
        </EntriesContext.Provider>
    );
};