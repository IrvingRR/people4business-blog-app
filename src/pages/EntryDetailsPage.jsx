import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { BiArrowBack } from "react-icons/bi";
import { Button, LinkButton } from "../components/common";
import { Actions, EntryBody, EntryContainer, EntryHeader, EntryInfo, HeaderActions } from "../styled/pages/entryDetailsPage";
import { EditEntryModal, ConfirmModal } from "../components/modals";
import { useModal } from '../hooks';
import { deleteEntryService, getEntryService } from "../services/entries";
import { pathRoutes } from "../router/routes";
import { EntriesContext } from "../contexts/EntriesContext";
import { Loader } from "../components/common";
import { InternetConnectionContext } from "../contexts/InternetConnectionContext";

export const EntryDetailsPage = () => {

    const { entry, isLoading, setEntry, setLoading, removeEntry } = useContext(EntriesContext);
    const { isOffline } = useContext(InternetConnectionContext);

    const editModal = useModal();
    const confirmModal = useModal();
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (isOffline) return getEntryFromStorage(id);

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

    const getEntryFromStorage = () => {
        const entriesStorage = JSON.parse(localStorage.getItem('entries'));
        const entry = entriesStorage.find(entry => entry.id === parseInt(id));
        
        if(entry.id) {
            return setEntry(entry);
        }
    }

    const deleteEntry = async () => {
        try {
            await deleteEntryService(id);
            toast.success('Entry deleted successfully!');
            removeEntry(id);
            navigate(pathRoutes.entries);
        } catch (error) {
            if(error.errors.length > 0) {
                error.errors.forEach(error => toast.error(error))
            } else {
                toast.error(error.message);
            }
        }
    };

  return (
    <>
    {isLoading && <Loader/>}
    {!isLoading && (
        <>
            <EditEntryModal isOpen={editModal.isOpen} closeModal={editModal.closeModal}/>
            <ConfirmModal isOpen={confirmModal.isOpen} closeModal={confirmModal.closeModal} confirmFunction={deleteEntry}/>
            <EntryContainer>
                <HeaderActions>
                    <Actions>
                        <LinkButton label='Back' icon={<BiArrowBack/>} to={pathRoutes.entries}/>
                    </Actions>
                    <Actions>
                        <Button label='Edit' onClick={editModal.openModal} disabled={isOffline}/>
                        <Button label='Delete' variant='outlined' onClick={confirmModal.openModal} disabled={isOffline}/>
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