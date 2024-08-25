import { Button } from "@mui/material";

interface ICustomButton {
  id: string;
  name: string;
  variant: "contained";
  color: "primary" | "secondary" | "success";
  onClick: () => void;
}

const CustomButton = ({ id, name, variant, color, onClick }: ICustomButton) => (
  <Button id={id} variant={variant} color={color} onClick={onClick} fullWidth>
    {name}
  </Button>
);

export default CustomButton;
