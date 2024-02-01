import { Button } from "../components/common/Button";
import { EntryRow } from "../components/composite";
import { CreateEntryModal } from "../components/modals";
import { useModal } from "../hooks/useModal";
import { Actions, EntriesList, HeaderActions } from "../styled/pages/entriesPage";

export const EntriesPage = () => {
  const { isOpen, openModal, closeModal } = useModal();
  
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
        <EntryRow/>
        <EntryRow/>
        <EntryRow/>
        <EntryRow/>
        <EntryRow/>
        <EntryRow/>
        <EntryRow/>
        <EntryRow/>
      </EntriesList>
    </>
  );
};