import React from "react";
import {AppContext} from "@src/main";
import {useContext} from "react";
import MainController from "@src/MainController";
import { WalletMode } from '@paima/providers';
import {middleEllipsis} from "@src/utils";
import {LoginInfo} from "@paima/sdk/mw-core";


const ConnectWalletButton: React.FC = () => {
    const mainController: MainController = useContext(AppContext);
    const [userAddress, setUserAddress] = React.useState<string | null>(mainController.userAddress);

    const loginInfo : LoginInfo = {
        mode: WalletMode.EvmInjected,
        preferBatchedMode: false,
    };

    return (
        <div>
            { mainController.isWalletConnected() ? (
                    <div> {middleEllipsis(userAddress)}</div>
                ) : (
                    <button onClick={() => {
                        mainController.connectWallet(loginInfo).then((result) => {
                            setUserAddress(result);
                        });
                    }}>Connect Wallet</button>
                )
            }
        </div>
    );
}

export default ConnectWalletButton;