import React, { useState, useEffect, useContext } from "react";
import type MainController from "@src/MainController";
import { Page } from "@src/MainController";
import Account from "./Account";
import Project from "./Project";
import { Box } from "@mui/material";
import { Routes, Route, useNavigate } from "react-router-dom";
import { AppContext } from "@src/main";

const PageCoordinator: React.FC = () => {
    const mainController: MainController = useContext(AppContext);
    const navigate = useNavigate();

    return (
        <Box>
            <Routes>
                <Route path={Page.Account} element={<Account />} />
                <Route path={Page.Project} element={<Project />} />
                <Route element={<div>There was something wrong...</div>} />
            </Routes>
        </Box>
    );
};

export default PageCoordinator;