import {AppContext} from "@src/main";
import React, {useContext} from "react";
import MainController from "@src/MainController";


const BuySell : React.FC = () => {
    const mainController: MainController = useContext(AppContext);

    const buyNft = (amountToBuy : number) => {
        if(!mainController.isWalletConnected()){
            console.error("Wallet is not connected");
        }

        mainController.buyNft(amountToBuy, 1);
    }

    return (
        <div>
            <h1>BuySell</h1>
            <button onClick={() => buyNft(1)}>Buy</button>
        </div>
    )
}

export default BuySell;