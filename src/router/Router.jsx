import { Route, Routes } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { pathRoutes } from './routes';
import { EntriesPage, EntryDetailsPage, NotFound } from "../pages";

export const Router = () => {
  return (
    <Routes>
        <Route path={pathRoutes.entries} element={<RootLayout/>}>
            <Route index element={<EntriesPage/>}/>
            <Route path={`${pathRoutes.entryDetails}/:id`} element={<EntryDetailsPage/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
};