import * as Paima from "./paima/middleware.js";
import {FailedResult, LoginInfo} from "@paima/sdk/mw-core";
import {ClaimableYield, NftContract, NftContractDetails, NftHistory, UserNftOwnership} from "@harvest-flow/utils";
import {Web3Provider} from "@ethersproject/providers";
import {Contract, ethers} from "ethers";
import TokTokNftAbi from "./abi/TokTokNft";

// The MainController is a React component that will be used to control the state of the application
// It will be used to check if the user has metamask installed and if they are connected to the correct network
// Other settings also will be controlled here

// create string enum called AppState
export enum Page {
  Account = "/account",
  Project = "/project",
}
const TOKTOK_NFT_CONTRACT_ADDRESS: string = process.env.TOKTOK_NFT_CONTRACT_ADDRESS;
const PAYMENT_TOKEN_CONTRACT_ADDRESS: string = process.env.PAYMENT_TOKEN_CONTRACT_ADDRESS;

// This is a class that will be used to control the state of the application
// the benefit of this is that it is very easy to test its logic unlike a react component
class MainController {
  userAddress: string | null = null;


  private provider?: Web3Provider = undefined;
  private lendingContract? : Contract = undefined;

  callback: (
    loadingMessage: string | null,
    successMessage: string | null,
    errorMessage: string | null
  ) => void = () => {};

  private checkCallback() {
    if (this.callback == null) {
      console.error("Callback is not set");
    }
  }

  private async enforceWalletConnected() {
    this.checkCallback();
    if (!this.isWalletConnected() || !this.userAddress) {
      //TODO: enforce wallet connected
    }
  }

  isWalletConnected = (): boolean => {
    return this.userAddress !== null;
  };

  async connectWallet(loginInfo : LoginInfo) : Promise<string> {
    const response = await Paima.default.userWalletLogin(loginInfo);
    console.log("connect wallet response: ", response);
    if (response.success === true) {
      this.callback(null, `Wallet connected to address: ${response.result.walletAddress}`, null);
      this.userAddress = response.result.walletAddress;
      this.provider = new Web3Provider(window.ethereum);
      this.lendingContract = new Contract(TOKTOK_NFT_CONTRACT_ADDRESS, TokTokNftAbi, this.provider.getSigner());
      return response.result.walletAddress;
    }
  }

  async buyNft(amountToBuy : number, price: number){
    if(!this.isWalletConnected()){
      this.callback(null, null, "Wallet not connected");
      return;
    }

    const amountToPay = amountToBuy * price;
    // get approval for the contract
    this.callback("Approving payment", null, null);
    const paymentTokenContract = new Contract(
        PAYMENT_TOKEN_CONTRACT_ADDRESS,
        ["function approve(address _spender, uint256 _value) public returns (bool success)"],
        this.provider.getSigner()
    );

    let approved = false;

    const amountToApprove = ethers.utils.parseEther(amountToPay.toString());

    try{
      await paymentTokenContract.approve(TOKTOK_NFT_CONTRACT_ADDRESS, amountToApprove);
      approved = true;
    } catch (e) {
      console.error("Error approving payment: ", e);
      this.callback(null, null, "Error approving payment");
      return;
    }

    if(approved) {
      this.callback("Buying NFT", null, null);
      try {
        //TODO: show some info about the NFT
        await this.lendingContract.mint(amountToBuy, this.userAddress);
        this.callback(null, "NFT bought successfully", null);
      } catch (e) {
        console.error("Error buying NFT: ", e);
        this.callback(null, null, "Error buying NFT");
        return;
      }

    }


  }


  async getAllNft(notEnded : boolean): Promise<NftContract[]> {
    const response = await Paima.default.getAllNfts(
        notEnded
    );
    console.debug("Get All Nft response: ", response);
    if (!response.success) {
      throw new Error((response as FailedResult).errorMessage);
    }
    return response.contracts;
  }

  async getDetailedNftContract(contractAddress: string): Promise<NftContractDetails> {
    const response = await Paima.default.getDetailedNftContract(contractAddress);
    console.debug("Get Nft Detail response: ", response);
    if (!response.success) {
      console.error("Error getting NFT details: ", response);
      return null;
    }
    return response.contract;
  }

  async getNftHistory(contractAddress: string): Promise<NftHistory> {
    const response = await Paima.default.getNftHistory(contractAddress);
    console.debug("Get Nft History response: ", response);
    if (!response.success) {
      throw new Error((response as FailedResult).errorMessage);
    }
    return {address: response.address, history: response.history};
  }

  async getUserNfts(): Promise<UserNftOwnership> {
      //await this.enforceWalletConnected();
      //const response = await Paima.default.getUserNfts(this.userAddress!);
      const response = await Paima.default.getUserNfts("");
      console.debug("Get User Nfts response: ", response);
      if (!response.success) {
        throw new Error((response as FailedResult).errorMessage);
      }
      return {ownedNfts: response.ownedNfts};
  }

  async getClaimable(contractAddress: string, tokenId : string): Promise<ClaimableYield> {
    const response = await Paima.default.getClaimable(contractAddress, tokenId);
    console.debug("Get Claimable response: ", response);
    if (!response.success) {
      throw new Error((response as FailedResult).errorMessage);
    }
    return {yield: response.yield, principal: response.principal};
  }

}

export default MainController;
