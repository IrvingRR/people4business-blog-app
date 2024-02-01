import { useContext, useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import toast from "react-hot-toast";
import { Button, Dropdown, Input, Loader } from "../components/common";
import { EntriesList } from "../components/composite";
import { CreateEntryModal } from "../components/modals";
import { useModal } from "../hooks/useModal";
import { Actions, FormActions, FormSearch, HeaderActions } from "../styled/pages/entriesPage";
import { getEntriesService, searchEntriesService } from "../services/entries";
import { EntriesContext } from "../contexts/EntriesContext";
import { InternetConnectionContext } from "../contexts/InternetConnectionContext";
import { handleErrorsHelper } from "../helpers/handleErrors";

export const EntriesPage = () => {
  const { entries, isLoading, readEntries, setLoading, setResults } = useContext(EntriesContext);
  const { isOffline } = useContext(InternetConnectionContext);
  const { isOpen, openModal, closeModal } = useModal();
  const [filter, setFilter] = useState({});
  const [search, setSearch] = useState('');

  const filterOptions = [
    { label: 'Title', value: 'title' },
    { label: 'Author', value: 'author' },
    { label: 'Content', value: 'content' },
  ];

  useEffect(() => {
    if (isOffline) return getEntriesStorage();

    const getEntries = async () => {
      try {
        setLoading(true);
        const entries = await getEntriesService();
  
        readEntries(entries.data);
        setResults(entries.data);
        
        localStorage.setItem('entries', JSON.stringify(entries.data));

      } catch (error) {
        handleErrorsHelper(error);
      } finally {
        setLoading(false);
      }
    };

    getEntries();
  }, []);

  const searchEntries = async () => {
    try {

      const response = await searchEntriesService(filter, search);
      setResults(response.data);

    } catch (error) {

      if(error.errors && error.errors.length > 0) {
        error.errors.forEach(error => toast.error(error))
      } else {
        toast.error(error.message);
      }

    }
  };

  const getEntriesStorage = () => {
    const entriesStorage = JSON.parse(localStorage.getItem('entries'));
    readEntries(entriesStorage);
  }

  useEffect(() => {
    if (!filter.value || !search) return setResults(entries);
    searchEntries();
  }, [search, filter]);
  
  return (
    <>
      <CreateEntryModal isOpen={isOpen} closeModal={closeModal}/>
      <HeaderActions>
        <FormSearch>
          <Dropdown label='Filter by' options={filterOptions} className='form-search-dropdown' setOption={setFilter}/>
          <FormActions>
            <Input
              type='text'
              name='search'
              placeholder={`Search by ${filter.value ? filter.value : ''}...`}
              value={search}
              className='form-search-input'
              icon={<BiSearch/>}
              disabled={isOffline}
              onChange={(e) => setSearch(e.target.value.trim())}/>
          </FormActions>
        </FormSearch>
        <Actions>
          <Button label='Add new' onClick={openModal} disabled={isOffline}/>
        </Actions>
      </HeaderActions>
      {isLoading && <Loader/>}
      {!isLoading && <EntriesList/>}
    </>
  );
};