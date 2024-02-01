import { BiInfoSquare } from "react-icons/bi";
import { ConnectionAlertWrapper } from "../../styled/components/composite/connectionAlert";

export const ConnectionAlert = () => {
  return (
    <ConnectionAlertWrapper>
        <BiInfoSquare/>
        <h3>No internet connection.</h3>
    </ConnectionAlertWrapper>
  );
};