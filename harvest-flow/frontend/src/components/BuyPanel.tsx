import {AppContext} from "@src/main";
import React, {useContext, useEffect} from "react";
import MainController from "@src/MainController";
import { Button, Container, Stack} from "@mui/material";
import {ProgressBar} from "@src/components/ProgressBar";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import {NftContractDetails} from "@harvest-flow/utils";
import {formatTime} from "@src/utils";

interface AmountInputProps {
    amount : number;
    setAmount : (amount : number) => void;
}
const AmountInput : React.FC<AmountInputProps> = ({amount,setAmount}) => {
    return (
        <Stack className={"borderAll"} direction={"row"} width={"200px"}>
            <div className={"borderRight"} style={{ width: '30px', height: '30px'}} onClick={() => setAmount(amount - 1)}>
                <RemoveIcon />
            </div>
            <div style={{width: '140px', verticalAlign : "center"}}>{amount}</div>
            <div className={"borderLeft"} style={{ width: '30px', height: '30px'}} onClick={() => setAmount(amount + 1)}>
                <AddIcon />
            </div>
        </Stack>
    )
}

const BuyPanel : React.FC = () => {
    const mainController: MainController = useContext(AppContext);

    const [amountToBuy, setAmountToBuy] = React.useState<number>(1);
    const [nftDetails, setNftDetails] = React.useState<NftContractDetails>(null);
    const [endingIn, setEndingIn] = React.useState<string>("- days - hours - minutes - seconds");


    useEffect(() => {
        //TODO: get the contract address from somewhere, if we handle multiple contracts
        mainController.getDetailedNftContract("contractAddress").then((details) => {
            console.log("Nft details: ", details);
            setNftDetails(details);
        });
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            if(nftDetails) {
                const now = new Date();
                const ending = new Date(nftDetails.leaseEnd);
                const diff = ending.getTime() - now.getTime();

                if (diff < 0) {
                    setEndingIn("Ended");
                } else {
                    setEndingIn(formatTime(diff));
                }
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [nftDetails]);

    const buyNft = (amountToBuy : number) => {
        if(!mainController.isWalletConnected()){
            console.error("Wallet is not connected");
        }

        mainController.buyNft(amountToBuy, Number.parseInt(nftDetails.price));

        // TODO: refresh the nft details
    }

    return (
        <Container className={"borderAll"} sx={{width: "400px"}}>
            <Stack className={"borderBottom"} direction="row" >
                <div style={{width: "50%"}}>
                    {/* TODO: handle phases*/}
                    Phase: Allow List
                </div>
                <div>
                    Ending in {endingIn}
                </div>
            </Stack>
            <Container disableGutters>
                <Stack alignItems={"center"} direction="column" >
                    <Container sx={{width:"50%", margin:"10px"}}>
                        {nftDetails && (<ProgressBar total={nftDetails.supplyCap} progress={nftDetails.mintedAmount}/>)}
                    </Container>
                    <Stack direction={"column"} alignItems={"center"} >
                        {/*TODO: from where this value comes from */}
                        <span>You can mint: 2 Nfts</span>
                        <AmountInput amount={amountToBuy} setAmount={setAmountToBuy}/>
                        <Stack direction={"row"} spacing={"4px"} >
                            <div> { !nftDetails ?
                                "----"
                                : (Number.parseInt(nftDetails.price) * amountToBuy).toString()

                            }</div>
                            <div>DAI</div>
                        </Stack>
                    </Stack>
                    <Button variant="contained" onClick={() => buyNft(amountToBuy)}>Submit</Button>
                </Stack>
            </Container>
        </Container>
    )
}

export default BuyPanel;