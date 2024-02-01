import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { Actions, Form } from "../../styled/components/common/form";
import { Button, Input, Textarea } from "../common";
import { Modal } from "./Modal";
import { EntriesContext } from '../../contexts/EntriesContext';
import { editEntryService } from "../../services/entries";

export const EditEntryModal = ({ isOpen, closeModal }) => {
  const { entry, setEntry, updateEntry } = useContext(EntriesContext);
  const { id } = useParams();
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);

      const response = await editEntryService(id, data);
      toast.success('Entry updated successfully!');
      setEntry(response.data);

      const entriesStorage = JSON.parse(localStorage.getItem('entries'));

      const newEntriesStorage = entriesStorage.map(entry => {
        if(entry.id === parseInt(id)) {
          return response.data;
        } else { 
          return entry;
        }
      });

      localStorage.setItem('entries', JSON.stringify(newEntriesStorage));
      
      updateEntry(response.data);
      closeModal();

    } catch (error) {
      if(error.errors && error.errors.length > 0) {
        error.errors.forEach(error => toast.error(error))
      } else {
          toast.error(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal isOpenModal={isOpen} closeModal={closeModal}>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <h2>Edit entry</h2>
            <Input
              type='text'
              placeholder='Title'
              defaultValue={entry.title}
              error={errors.title}
              legend={errors.title?.message}
              register={{
                ...register('title', {required: 'Title is required'})
              }}/>

            <Input
              type='text'
              placeholder='Author'
              defaultValue={entry.author}
              error={errors.author}
              legend={errors.author?.message}
              register={{
                ...register('author', {required: 'Author is required'})
              }}/>

            <Textarea
              placeholder="Write the content here"
              defaultValue={entry.content}
              error={errors.content}
              legend={errors.content?.message}
              register={{
                ...register('content', {required: 'Content is required'})
              }}/>

            <Actions>
                <Button label='Cancel' variant='outlined' type='button' onClick={closeModal}/>
                <Button label='Edit' isLoading={isLoading} disabled={isLoading}/>
            </Actions>
        </Form>
    </Modal>
  );
};