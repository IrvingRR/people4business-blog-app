import { BiMoon, BiNetworkChart, BiSun } from "react-icons/bi";
import { HeaderElement, Logo } from "../../styled/components/composite/header";
import { IconButton } from "../common/IconButton"; 
import { pathRoutes } from "../../router/routes";
import { useContext } from "react";
import { ThemeModeContext } from "../../contexts/ThemeModeContext";

export const Header = () => {

  const { isDarkMode, changeMode } = useContext(ThemeModeContext);
  
  return (
    <HeaderElement>
        <Logo to={pathRoutes.entries}>
            <BiNetworkChart/>
            Blog
        </Logo>
        <IconButton icon={isDarkMode ? <BiMoon/> : <BiSun/>} variant='outlined' onClick={changeMode}/>
    </HeaderElement>
  );
};