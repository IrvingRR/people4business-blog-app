import { LinkButtonElement } from "../../styled/components/common/linkButton";

export const LinkButton = ({ label, variant, icon, isLoading, ...props }) => {
  return (
    <LinkButtonElement {...props} variant={variant}>
        {isLoading && (
          <WrapperSnniper>
            <Spinner/>
          </WrapperSnniper>
        )}
        { icon }
        { label }
    </LinkButtonElement>
  );
};