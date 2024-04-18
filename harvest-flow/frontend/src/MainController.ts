import type { LoginInfo } from "@paima/sdk/mw-core";

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

  private isWalletConnected = (): boolean => {
    return typeof window.ethereum !== "undefined" ? true : false;
  };

  async connectWallet(loginInfo: LoginInfo) {
    // TODO: connect wallet
  }

}

export default MainController;
