import { useContext, useEffect } from "react";
import { Button, Loader } from "../components/common";
import { EntryRow } from "../components/composite";
import { CreateEntryModal } from "../components/modals";
import { useModal } from "../hooks/useModal";
import { Actions, EntriesList, HeaderActions } from "../styled/pages/entriesPage";
import { getEntriesService } from "../services/entries";
import { EntriesContext } from "../contexts/EntriesContext";

export const EntriesPage = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const { entries, isLoading, readEntries, setLoading } = useContext(EntriesContext);

  useEffect(() => {
    const getEntries = async () => {
      try {
        setLoading(true);
        const entries = await getEntriesService();
  
        readEntries(entries.data);
        localStorage.setItem('entries', JSON.stringify(entries.data));

      } catch (error) {
        if(error.errors.length > 0) {
          error.errors.forEach(error => toast.error(error))
        } else {
          toast.error(error.message);
        }
      
      } finally {
        setLoading(false);
      }
    };

    getEntries();
  }, []);
  
  return (
    <>
      <CreateEntryModal isOpen={isOpen} closeModal={closeModal}/>
      <HeaderActions>
        Entries
        <Actions>
          <Button label='Add new' onClick={openModal}/>
        </Actions>
      </HeaderActions>
      <EntriesList>
        {isLoading && <Loader/>}
        {(entries.length > 0 && !isLoading) && entries.map(entry => <EntryRow key={entry.id} data={entry}/>)}
        {(entries.length === 0 && !isLoading && <p>No entries yet</p>)}
      </EntriesList>
    </>
  );
};