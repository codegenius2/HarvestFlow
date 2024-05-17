import React, { useState, useEffect, useContext } from "react";
import type MainController from "@src/MainController";
import { Page } from "@src/MainController";
import Account from "./Account";
import Project from "./Project";
import HomeEN from "./Home_en";
import Home from "./Home";
import HomeJP from "./Home_jp";
import { Box } from "@mui/material";
import { Routes, Route, useNavigate } from "react-router-dom";
import { AppContext } from "@src/main";

const PageCoordinator: React.FC = () => {
  const mainController: MainController = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <Box>
      <Routes>
        <Route path={Page.Home} element={<Home />} />
        <Route path={Page.HomeEN} element={<HomeEN />} />
        <Route path={Page.HomeJP} element={<HomeJP />} />
        <Route path={Page.Account} element={<Account />} />
        <Route path={Page.Project} element={<Project />} />
        <Route element={<div>There was something wrong...</div>} />
      </Routes>
    </Box>
  );
};

export default PageCoordinator;
