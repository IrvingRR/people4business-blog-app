import { ButtonElement } from "../../styled/components/common/button";

export const Button = ({ label, variant, icon, ...props }) => {
  return (
    <ButtonElement {...props} variant={variant}>
        { icon }
        { label }
    </ButtonElement>
  );
};