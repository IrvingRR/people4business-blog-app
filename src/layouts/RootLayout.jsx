import { Outlet } from "react-router-dom";
import { RootContainer, RootContent } from "../styled/layouts/rootLayout";
import { Header } from "../components/composite";
import { EntriesProvider } from "../contexts/EntriesContext";

export const RootLayout = () => {
  return (
    <RootContainer>
        <Header/>
        <RootContent>
          <EntriesProvider>
            <Outlet/>
          </EntriesProvider>
        </RootContent>
    </RootContainer>
  );
};