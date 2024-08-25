import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";

const PublicRoutes = () => (
  <Routes>
    <Route path="/" element={<Dashboard />}></Route>
  </Routes>
);

export default PublicRoutes;
