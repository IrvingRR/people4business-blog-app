import { InputContent, InputElement, InputGroup, Legend } from "../../styled/components/common/input";

export const Input = ({ icon, maxWidth, error, legend, rounded, ...props }) => {
  return (
    <InputGroup max_width={maxWidth}>
        <InputContent>
            <InputElement rounded={rounded} error={error} icon={icon} { ...props }/>
            {icon}
        </InputContent>
        {(error && legend) && <Legend>{legend}</Legend> }
    </InputGroup>
  );
};