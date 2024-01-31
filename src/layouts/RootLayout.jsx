import { Outlet } from "react-router-dom";
import { RootContainer, RootContent } from "../styled/layouts/rootLayout";
import { Button } from "../components/common/Button";
import { BiUser } from "react-icons/bi";

export const RootLayout = () => {
  return (
    <RootContainer>
        <RootContent>
            <div>RootLayout</div>
            <Outlet/>
            <Button label='Button'/><br/>
            <Button label='Secondary' variant='secondary'/><br/>
            <Button label='Outlined' variant='outlined'/><br/>
            <Button label='Secondary Outlined' variant='secondary-outlined'/><br/>
            <Button label='Text' variant='text'/><br/>
            <Button label='With icon' icon={<BiUser/>} variant='text'/><br/>
            <Button label='With icon' icon={<BiUser/>} variant='text-secondary'/><br/>
        </RootContent>
    </RootContainer>
  );
};