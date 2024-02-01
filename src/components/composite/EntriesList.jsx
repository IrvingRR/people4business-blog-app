import { useContext } from "react"
import { EntryRow } from "./EntryRow"
import { EntriesContext } from "../../contexts/EntriesContext"
import { EntriesListElement } from "../../styled/components/composite/entriesList";

export const EntriesList = () => {
    const { results } = useContext(EntriesContext);

    return (
        <EntriesListElement>
            {results.length > 0
                ? results.map(entry => <EntryRow key={entry.id} data={entry}/>)
                : <p>No entries yet</p>
            }
        </EntriesListElement>
    );
};
