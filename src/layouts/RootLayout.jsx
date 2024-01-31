import { Outlet } from "react-router-dom";
import { RootContainer, RootContent } from "../styled/layouts/rootLayout";
import { Input } from "../components/common";
import { BiUser } from "react-icons/bi";
export const RootLayout = () => {
  return (
    <RootContainer>
        <RootContent>
            <div>RootLayout</div>
            <Outlet/>
            <br/>
            <Input icon={<BiUser/>} error legend='Invalid title' type='text' name='title' placeholder='Title'/>
        </RootContent>
    </RootContainer>
  );
};