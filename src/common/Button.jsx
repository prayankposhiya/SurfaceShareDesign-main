import { Button } from "@mui/material";
import React from "react";

const ButtonComponent = ({
  startIcon = null,
  endIcon = null,
  btnClass = "",
  btnText = "",
  btnType = "button",
  onClick = () => {},
  variant = "contained",
  isDisabled = false,
  style = {},
}) => {
  return (
    <Button
      variant={variant}
      type={btnType}
      className={`!m-1 ${btnClass}`}
      onClick={onClick}
      disabled={isDisabled}
      startIcon={startIcon}
      endIcon={endIcon}
      sx={{ textTransform: "none", fontFamily: "Inter, sans-serif", ...style }}
    >
      {btnText}
    </Button>
  );
};

export default ButtonComponent;
