import { InputContent, InputElement, InputGroup, Legend } from "../../styled/components/common/input";

export const Input = ({ icon, error, legend, ...props }) => {
  return (
    <InputGroup>
        <InputContent>
            <InputElement error={error} icon={icon} { ...props }/>
            {icon}
        </InputContent>
        {(error && legend) && <Legend>{legend}</Legend> }
    </InputGroup>
  );
};