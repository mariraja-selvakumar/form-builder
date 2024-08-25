import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import CustomButton from "../components/CustomButton";
import constants from "../../utils/constants";
import img from "../../assets/icons/thumbsup.png";
import "./Navbar.scss";

const Navbar = () => (
  <Box sx={{ flexGrow: 1 }} className="navbar-container">
    <AppBar position="fixed">
      <Toolbar variant="dense" className="toolbar">
        <Box className="toolbar-title">
          <Box component="img" alt="navbar-img" src={img} />
          <Typography variant="h6" component="div" color="black">
            {constants.UserFeedback}
          </Typography>
        </Box>

        <Box className="toolbar-actions">
          <CustomButton
            id="save"
            name="SAVE"
            variant="contained"
            color="primary"
            onClick={() => {}}
          />
          <Box mx={1} />
          <CustomButton
            id="publish"
            name="Publish"
            variant="contained"
            color="success"
            onClick={() => {}}
          />
        </Box>
      </Toolbar>
    </AppBar>
  </Box>
);

export default Navbar;
