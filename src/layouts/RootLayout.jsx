import { Outlet } from "react-router-dom";
import { RootContainer, RootContent } from "../styled/layouts/rootLayout";

export const RootLayout = () => {
  return (
    <RootContainer>
        <RootContent>
            <div>RootLayout</div>
            <Outlet/>
        </RootContent>
    </RootContainer>
  );
};