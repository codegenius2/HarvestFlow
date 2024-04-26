import React, {useContext, useEffect, useState} from "react";
import {AppContext} from "@src/main";
import MainController from "@src/MainController";
import {Alert, Popper} from "@mui/material";
import {bottom} from "@popperjs/core";


const FeedbackModal: React.FC = () => {
    const mainController: MainController = useContext(AppContext);

    const [loadingMessage, setLoadingMessage] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const [visible, setVisible] = useState<boolean>(false);

    useEffect(() => {
        mainController.callback = (
            loadingMessage: string | null,
            successMessage: string | null,
            errorMessage: string | null
        ) => {
            // Update the local state and show a message to the user
            setLoadingMessage(loadingMessage);
            setSuccessMessage(successMessage);
            setErrorMessage(errorMessage);
        };
    }, []);

    useEffect(() => {
        if (loadingMessage || successMessage || errorMessage) {
            setVisible(true);

            if(!loadingMessage) {
                //close after 3 seconds if not loading
                setTimeout(() => {
                    setVisible(false);
                }, 3000);
            }
        }
    }, [loadingMessage, successMessage, errorMessage]);

    return (
        <Popper open={visible} anchorEl={document.body} modifiers={[
            {
                name: 'preventOverflow',
                enabled: true,
                options: {
                    altAxis: true,
                    altBoundary: true,
                    tether: true,
                    rootBoundary: 'viewport',
                    padding: 8,
                },
            },
        ]} >
            {loadingMessage && (
                <Alert severity="info">{loadingMessage}</Alert>
            )}
            {successMessage && (
                <Alert severity="success">{successMessage}</Alert>
            )}
            {errorMessage && (
                <Alert severity="error">{errorMessage}</Alert>
            )}
        </Popper>
    )
}

export default FeedbackModal;