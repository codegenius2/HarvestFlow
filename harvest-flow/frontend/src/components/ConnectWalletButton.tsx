import React from "react";
import { AppContext } from "@src/main";
import { useContext } from "react";
import MainController from "@src/MainController";
import { WalletMode } from "@paima/providers";
import { middleEllipsis } from "@src/utils";
import { LoginInfo } from "@paima/sdk/mw-core";
import { Typography } from "@mui/material";

const ConnectWalletButton: React.FC = () => {
  const mainController: MainController = useContext(AppContext);
  const [userAddress, setUserAddress] = React.useState<string | null>(
    mainController.userAddress,
  );

  const loginInfo: LoginInfo = {
    mode: WalletMode.EvmInjected,
    preferBatchedMode: false,
  };

  return (
    <div>
      {mainController.isWalletConnected() ? (
        <div> {middleEllipsis(userAddress)}</div>
      ) : (
        <div
          onClick={() => {
            mainController.connectWallet(loginInfo).then((result) => {
              setUserAddress(result);
            });
          }}
          style={{
            backgroundColor: "inherit",
            border: "none",
          }}
        >
          <Typography style={{ fontSize: "15px", fontWeight: "500px" }}>
            Connect&nbsp;Wallet
          </Typography>
        </div>
      )}
    </div>
  );
};

export default ConnectWalletButton;
