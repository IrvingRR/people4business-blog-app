import { TextareaContent, TextareaElement, TextareaGroup, Legend } from "../../styled/components/common/textarea";

export const Textarea = ({ maxWidth, error, legend, rounded, register, ...props }) => {
  return (
    <TextareaGroup max_width={maxWidth}>
        <TextareaContent>
            <TextareaElement {...register} rounded={rounded} error={error} { ...props }/>
        </TextareaContent>
        {(error && legend) && <Legend>{legend}</Legend> }
    </TextareaGroup>
  );
};