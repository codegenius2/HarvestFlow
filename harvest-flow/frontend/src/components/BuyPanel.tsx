import {AppContext} from "@src/main";
import React, {useContext, useEffect} from "react";
import MainController from "@src/MainController";
import {Button, Container, Divider, Stack} from "@mui/material";
import {ProgressBar} from "@src/components/ProgressBar";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import {NftContractDetails} from "@harvest-flow/utils";
import {calculateTotalRewards, formatTime} from "@src/utils";

interface AmountInputProps {
    amount : number;
    maxAmount? : number;
    setAmount : (amount : number) => void;
}
const AmountInput : React.FC<AmountInputProps> = ({amount,maxAmount, setAmount}) => {
    return (
        <Stack className={"borderAll"} direction={"row"}>
            <div className={"borderRight"} style={{ width: '30px', height: '30px'}}
                 onClick={() => {
                     if(amount > 0) {
                         setAmount(amount - 1)
                     }
                 }}>
                <RemoveIcon />
            </div>
            <div style={{width: '140px', verticalAlign : "center"}}>{amount}</div>
            <div className={"borderLeft"} style={{ width: '30px', height: '30px'}}
                 onClick={() => {
                     if(maxAmount && amount < maxAmount) {
                         setAmount(amount + 1)
                     } else if (!maxAmount) {
                         setAmount(amount + 1)
                     }
                }}>
                <AddIcon />
            </div>
        </Stack>
    )
}

interface BuyPanelProps {
    nftContractAddress : string;

}

const BuyPanel : React.FC<BuyPanelProps> = (
    {nftContractAddress}
) => {
    const mainController: MainController = useContext(AppContext);

    const [amountToBuy, setAmountToBuy] = React.useState<number>(1);
    const [nftDetails, setNftDetails] = React.useState<NftContractDetails>(null);
    const [endingIn, setEndingIn] = React.useState<string>("- days - hours - minutes - seconds");
    const [totalRewards, setTotalRewards] = React.useState<string>("0");

    useEffect(() => {
        mainController.getDetailedNftContract(nftContractAddress).then((details) => {
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

    useEffect(() => {
        if(nftDetails){
            setTotalRewards(calculateTotalRewards(nftDetails, amountToBuy).toFixed(2));
        }
    }, [nftDetails,amountToBuy]);

    const buyNft = (amountToBuy : number) => {
        if(!mainController.isWalletConnected()){
            console.error("Wallet is not connected");
        }

        mainController.buyNft(amountToBuy, Number.parseInt(nftDetails.price)).then(() => {
            mainController.getDetailedNftContract(nftContractAddress).then((details) => {
                setNftDetails(details);
            });
        });
    }

    return (
        <Container className={"borderAll"} sx={{width: "400px"}} disableGutters>
            <Stack direction="row" >
                <div style={{width: "50%"}}>
                    {/* TODO: handle phases*/}
                    Phase: Allow List
                </div>
                <div>
                    Ending in {endingIn}
                </div>
            </Stack>
            <Divider sx={{height: "2px"}}/>
            <Container>
                <Stack alignItems={"center"} direction="column">
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

                </Stack>
                <Divider sx={{height: "2px"}}/>
                <Stack id="terms" direction="row"
                       justifyContent={"space-evenly"} spacing={0.5}
                       sx={{padding: "20px"}}
                >
                    <Stack direction={"column"} alignItems="end">
                        <span>Expected APR: </span>
                        <span>Price: </span>
                        <span>Redemption: </span>
                        <span>Remaining Term: </span>
                    </Stack>
                    <Divider orientation="vertical" variant="inset" flexItem sx={{width: "2px"}}/>
                    <Stack direction={"column"} alignItems="start">
                        <span>{nftDetails ? nftDetails.minYield / 1e16 : "-"} %</span>
                        <span>{nftDetails ? nftDetails.price : "----"} DAI</span>
                        {/*TODO: actual values*/}
                        <span>April, 2027</span>
                        <span> 24 month </span>
                    </Stack>
                </Stack>
                <Divider sx={{height: "2px"}}/>
                <Container> Total rewards: {totalRewards} DAI</Container>
                <Button variant="contained"
                        onClick={() => buyNft(amountToBuy)}
                        sx={{ marginY: "10px"}}
                >Submit</Button>
            </Container>
        </Container>
    )
}

export default BuyPanel;