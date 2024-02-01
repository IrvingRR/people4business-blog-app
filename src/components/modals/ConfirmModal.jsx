import { ConfirmModalActions, ConfirmModalCard, ConfirmModalContent } from "../../styled/components/modals/confirmModal";
import { Button } from "../common/Button";
import { Modal } from "./Modal";

export const ConfirmModal = ({ isOpen, closeModal }) => {
  return (
    <Modal isOpenModal={isOpen} closeModal={closeModal}>
       <ConfirmModalCard>
        <ConfirmModalContent>
            <h2>Are you sure?</h2>
            <p>The entry will deleted from the database</p>
        </ConfirmModalContent>
        <ConfirmModalActions>
            <Button label='Cancel' variant='outlined' onClick={closeModal}/>
            <Button label='Confirm'/>
        </ConfirmModalActions>
       </ConfirmModalCard>
    </Modal>
  );
};