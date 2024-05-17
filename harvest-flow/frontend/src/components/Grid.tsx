import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#e8eff5",
  border: "1px solid black",
  borderRadius: "0px",
}));

const BasicGrid: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={4}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BasicGrid;
