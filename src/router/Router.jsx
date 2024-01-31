import { Route, Routes } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { pathRoutes } from './routes';

export const Router = () => {
  return (
    <Routes>
        <Route path={pathRoutes.home} element={<RootLayout/>}>
            <Route index element={<h2>Home page - Entries list</h2>}/>
            <Route path={pathRoutes.entryDetails} element={<h2>Entry detail page</h2>}/>
        </Route>
        <Route path="*" element={<h2>Error 404 - Page not found</h2>}/>
    </Routes>
  );
};