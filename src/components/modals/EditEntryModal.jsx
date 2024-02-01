import { Actions, Form, Textarea } from "../../styled/components/common/form";
import { Button } from "../common/Button";
import { Input } from "../common/Input";
import { Modal } from "./Modal";

export const EditEntryModal = ({ isOpen, closeModal }) => {
  return (
    <Modal isOpenModal={isOpen} closeModal={closeModal}>
        <Form>
            <h2>Edit entry</h2>
            <Input type='text' name='title' placeholder='Title'/>
            <Input type='text' name='author' placeholder='Author'/>
            <Textarea name='content' placeholder="Write the content here"/>
            <Actions>
                <Button label='Cancel' variant='outlined' type='button' onClick={closeModal}/>
                <Button label='Edit'/>
            </Actions>
        </Form>
    </Modal>
  );
};