import { ButtonElement } from "../../styled/components/common/button";

export const Button = ({ label, variant, icon, ...props }) => {
  return (
    <ButtonElement variant={variant} {...props}>
        { icon }
        { label }
    </ButtonElement>
  );
};