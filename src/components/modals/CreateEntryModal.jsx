import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Actions, Form } from "../../styled/components/common/form";
import { Input, Textarea, Button } from "../common";
import { Modal } from "./Modal";
import { createEntryService } from "../../services/entries";
import { EntriesContext } from "../../contexts/EntriesContext";
import { InternetConnectionContext } from "../../contexts/InternetConnectionContext";
import { handleErrorsHelper } from "../../helpers/handleErrors";

export const CreateEntryModal = ({ isOpen, closeModal }) => {
  const { addEntry } = useContext(EntriesContext);
  const { isOffline } = useContext(InternetConnectionContext);
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async(data) => {
    try {
      
      setIsLoading(true)
      const response = await createEntryService(data);

      if(response.status === 'success') {

        addEntry(response.data);
        toast.success('Entry created successfully!');
        
        const entriesStorage = JSON.parse(localStorage.getItem('entries'));
        localStorage.setItem('entries', JSON.stringify([...entriesStorage, response.data]));

        reset();
        closeModal();

      } else {
        toast.error(response.error);
      }

    } catch (error) {
     handleErrorsHelper(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    closeModal();
    reset();
  };

  return (
    <Modal isOpenModal={isOpen} closeModal={closeModal}>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <h2>Create new entry</h2>
            <Input
              type='text'
              placeholder='Title'
              error={errors.title}
              legend={errors.title?.message}
              register={{
                ...register('title', {required: 'Title is required'})
              }}/>

            <Input
              type='text'
              placeholder='Author'
              error={errors.author}
              legend={errors.author?.message}
              register={{
                ...register('author', {required: 'Author is required'})
              }}/>

            <Textarea
              placeholder="Write the content here"
              error={errors.content}
              legend={errors.content?.message}
              register={{
                ...register('content', {required: 'Content is required'})
              }}/>

            <Actions>
                <Button label='Cancel' variant='outlined' type='button' onClick={handleCancel}/>
                <Button label='Create' isLoading={isLoading} disabled={isLoading || isOffline}/>
            </Actions>
        </Form>
    </Modal>
  );
};