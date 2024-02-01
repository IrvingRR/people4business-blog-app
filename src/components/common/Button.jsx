import { ButtonElement, Spinner, WrapperSnniper } from "../../styled/components/common/button";

export const Button = ({ label, variant, icon, isLoading, ...props }) => {
  return (
    <ButtonElement {...props} variant={variant}>
        {isLoading && (
          <WrapperSnniper>
            <Spinner/>
          </WrapperSnniper>
        )}
        { icon }
        { label }
    </ButtonElement>
  );
};