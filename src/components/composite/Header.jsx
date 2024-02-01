import { BiNetworkChart, BiSun } from "react-icons/bi";
import { HeaderElement, Logo } from "../../styled/components/composite/header";
import { IconButton } from "../common/IconButton"; 
import { pathRoutes } from "../../router/routes";

export const Header = () => {
  return (
    <HeaderElement>
        <Logo to={pathRoutes.entries}>
            <BiNetworkChart/>
            Blog
        </Logo>
        <IconButton icon={<BiSun/>} variant='outlined'/>
    </HeaderElement>
  );
};