import { Outlet } from "react-router-dom";
import { RootContainer, RootContent } from "../styled/layouts/rootLayout";
import { Header } from "../components/composite";

export const RootLayout = () => {
  return (
    <RootContainer>
        <Header/>
        <RootContent>
            <Outlet/>
        </RootContent>
    </RootContainer>
  );
};