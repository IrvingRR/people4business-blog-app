import { useContext, useEffect } from "react";
import { Button, Dropdown, IconButton, Input, Loader } from "../components/common";
import { EntryRow } from "../components/composite";
import { CreateEntryModal } from "../components/modals";
import { useModal } from "../hooks/useModal";
import { Actions, EntriesList, FormActions, FormSearch, HeaderActions } from "../styled/pages/entriesPage";
import { getEntriesService } from "../services/entries";
import { EntriesContext } from "../contexts/EntriesContext";
import { BiSearch } from "react-icons/bi";

export const EntriesPage = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const { entries, isLoading, readEntries, setLoading } = useContext(EntriesContext);

  const filterOptions = [
    { label: 'Title', value: 'title' },
    { label: 'Author', value: 'author' },
    { label: 'Content', value: 'content' },
  ];

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
        <FormSearch>
          <Dropdown label='Filter by' options={filterOptions} className='form-search-dropdown'/>
          <FormActions>
            <Input type='text' name='search' placeholder='Search by...' className='form-search-input'/>
            <IconButton icon={<BiSearch/>}/>
          </FormActions>
        </FormSearch>
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