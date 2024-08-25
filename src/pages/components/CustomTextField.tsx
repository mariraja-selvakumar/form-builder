import { TextField } from "@mui/material";

interface ICustomTextField {
  id: string;
  name: string;
  label: string;
  onChange: () => void;
}

const CustomTextField = ({ id, name, label, onChange }: ICustomTextField) => (
  <TextField
    margin="dense"
    id={id}
    name={name}
    label={label}
    onChange={onChange}
    variant="standard"
    fullWidth
  />
);

export default CustomTextField;
