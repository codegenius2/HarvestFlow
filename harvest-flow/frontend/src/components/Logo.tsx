import React from "react";
import { Box } from "@mui/material";

interface LogoProps {
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ height }) => {
  return (
    <Box sx={{ margin: "8px 0", verticalAlign: "left" }}>
      <span> Harvest Flow</span>
    </Box>
  );
};

export default Logo;
