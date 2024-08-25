import { Box } from "@mui/material";
import NavBar from "../pages/navbar/Navbar";
import PublicRoutes from "./PublicRoutes";

const RouteApp = () => (
  <Box>
    <NavBar />
    <Box marginTop="74px"></Box>
    <PublicRoutes />
  </Box>
);

export default RouteApp;
