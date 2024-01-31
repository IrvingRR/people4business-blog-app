import { IconButtonElement } from "../../styled/components/common/iconButton";

export const IconButton = ({ icon, variant, ...props }) => {
  return (
    <IconButtonElement variant={variant} { ...props }>
        {icon}
    </IconButtonElement>
  );
};