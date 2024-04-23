import * as Paima from "./paima/middleware.js";
import {FailedResult, LoginInfo} from "@paima/sdk/mw-core";
import {ClaimableYield, NftContract, NftContractDetails, NftHistory, UserNftOwnership} from "@harvest-flow/utils";

// The MainController is a React component that will be used to control the state of the application
// It will be used to check if the user has metamask installed and if they are connected to the correct network
// Other settings also will be controlled here

// create string enum called AppState
export enum Page {
  Account = "/account",
  Project = "/project",
}

// This is a class that will be used to control the state of the application
// the benefit of this is that it is very easy to test its logic unlike a react component
class MainController {
  userAddress: string | null = null;

  callback: (
    page: Page | null,
  ) => void;

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
      this.userAddress = response.result.walletAddress;
      return response.result.walletAddress;
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
      throw new Error((response as FailedResult).errorMessage);
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
