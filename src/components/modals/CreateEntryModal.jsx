import { useForm } from "react-hook-form";
import { Actions, Form } from "../../styled/components/common/form";
import { Input, Textarea, Button } from "../common";
import { Modal } from "./Modal";

export const CreateEntryModal = ({ isOpen, closeModal }) => {
  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);
  console.log('Errors:', errors);

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
                <Button label='Cancel' variant='outlined' type='button' onClick={closeModal}/>
                <Button label='Create'/>
            </Actions>
        </Form>
    </Modal>
  );
};