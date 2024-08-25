import { useState } from "react";
import {
  Box,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import CustomButton from "../../components/CustomButton";
import CustomTextField from "../../components/CustomTextField";
import constants from "../../../utils/constants";
import img from "../../../assets/icons/newform.png";
import "./styles/NewForm.scss";

const NewForm = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => setOpen(false);

  const handleOpen = () => setOpen(true);

  return (
    <Box className="new-form-container">
      <Card className="new-form-card" onClick={handleOpen}>
        <Box component="img" alt="add-form-img" src={img} />
      </Card>

      <Dialog
        className="new-form-dialog"
        open={open}
        onClose={handleClose}
        fullWidth
      >
        <DialogTitle>{constants.CreateFeedbackForm}</DialogTitle>
        <DialogContent>
          <CustomTextField
            id="form-name"
            name="formName"
            label="Generic Website Rating"
            onChange={() => {}}
          />
        </DialogContent>
        <DialogActions className="new-form-actions">
          <Box className="action-btn-group">
            <CustomButton
              id="crete-form"
              name="Create"
              variant="contained"
              color="success"
              onClick={() => {}}
            />
            <Box m={1} />
            <CustomButton
              id="cance-form"
              name="Cancel"
              variant="contained"
              color="secondary"
              onClick={() => {}}
            />
          </Box>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default NewForm;
