import React from "react";
import { Box } from "@mui/material";
import logo from "@assets/images/logo.png";

interface LogoProps {
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ height }) => {
  return (
    <Box sx={{ margin: "8px 0", verticalAlign: "left" }}>
      <img src={logo} alt="Logo" />
    </Box>
  );
};

export default Logo;
