import { Button } from "../components/common/Button";
import { EntryCard } from "../components/composite";
import { Actions, EntriesGallery, HeaderActions } from "../styled/pages/entriesPage";

export const EntriesPage = () => {
  return (
    <>
      <HeaderActions>
        Entries
        <Actions>
          <Button label='Add new'/>
        </Actions>
      </HeaderActions>
      <EntriesGallery>
        <EntryCard/>
        <EntryCard/>
        <EntryCard/>
        <EntryCard/>
        <EntryCard/>
        <EntryCard/>
        <EntryCard/>
        <EntryCard/>
      </EntriesGallery>
    </>
  );
};