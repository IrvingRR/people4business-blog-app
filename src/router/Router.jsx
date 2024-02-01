import { Route, Routes } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { pathRoutes } from './routes';
import { EntriesPage } from "../pages";

export const Router = () => {
  return (
    <Routes>
        <Route path={pathRoutes.entries} element={<RootLayout/>}>
            <Route index element={<EntriesPage/>}/>
            <Route path={pathRoutes.entryDetails} element={<h2>Entry detail page</h2>}/>
        </Route>
        <Route path="*" element={<h2>Error 404 - Page not found</h2>}/>
    </Routes>
  );
};