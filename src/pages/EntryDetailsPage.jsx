import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { Button, LinkButton } from "../components/common";
import { Actions, EntryBody, EntryContainer, EntryHeader, EntryInfo, HeaderActions } from "../styled/pages/entryDetailsPage";
import { EditEntryModal, ConfirmModal } from "../components/modals";
import { useModal } from '../hooks';
import { getEntryService } from "../services/entries";
import { pathRoutes } from "../router/routes";
import { EntriesContext } from "../contexts/EntriesContext";
import { Loader } from "../components/common";

export const EntryDetailsPage = () => {

    const { entry, isLoading, setEntry, setLoading } = useContext(EntriesContext);

    const editModal = useModal();
    const confirmModal = useModal();
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getEntry = async () => {
            try {
                setLoading(true);
                const response = await getEntryService(id);
                setEntry(response.data);

            } catch (error) {
                navigate(pathRoutes.notFound);
            } finally {
                setLoading(false);
            }
        }

        getEntry();
    }, []);

  return (
    <>
    {isLoading && <Loader/>}
    {!isLoading && (
        <>
            <EditEntryModal isOpen={editModal.isOpen} closeModal={editModal.closeModal}/>
            <ConfirmModal isOpen={confirmModal.isOpen} closeModal={confirmModal.closeModal}/>
            <EntryContainer>
                <HeaderActions>
                    <Actions>
                        <LinkButton label='Back' icon={<BiArrowBack/>} to={pathRoutes.entries}/>
                    </Actions>
                    <Actions>
                        <Button label='Edit' onClick={editModal.openModal}/>
                        <Button label='Delete' variant='outlined' onClick={confirmModal.openModal}/>
                    </Actions>
                </HeaderActions>

                <EntryHeader>
                    <EntryInfo>
                        <p className="entry-author">{entry.author}</p>
                        <span className="entry-separator">|</span>
                        <span className="entry-publication-date">{entry.publication_date}</span>
                    </EntryInfo>
                    <h2>{entry.title}</h2>
                </EntryHeader>

                <EntryBody>
                    {entry.content}
                </EntryBody>
            </EntryContainer>
        </>
    )}
    </>
  );
};