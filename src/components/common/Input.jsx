import { InputContent, InputElement, InputGroup, Legend } from "../../styled/components/common/input";

export const Input = ({ icon, maxWidth, error, legend, rounded, register, ...props }) => {
  return (
    <InputGroup max_width={maxWidth}>
        <InputContent>
            <InputElement { ...register } rounded={rounded} error={error} icon={icon} { ...props } autoComplete="off"/>
            {icon}
        </InputContent>
        {(error && legend) && <Legend>{legend}</Legend> }
    </InputGroup>
  );
};