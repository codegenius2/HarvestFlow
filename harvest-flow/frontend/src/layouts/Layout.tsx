import { Box, Container } from "@mui/material";
import React from "react";
import Header from "@src/components/Header";

interface Props {
  children?: React.ReactNode;
  small?: boolean;
  header?: boolean;
}

const Layout: React.FC<Props> = ({ children, small, header = true }) => {
  return (
    <>
      <Container
          disableGutters maxWidth={small ? "sm" : "lg"}
          className="borderAll"
      >

        {header && <Header /> }
        {children}
      </Container>
    </>
  );
};

export default Layout;
