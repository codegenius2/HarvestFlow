import { buildModule } from '@nomicfoundation/hardhat-ignition/modules';
import {Bytecode} from "hardhat/internal/hardhat-network/stack-traces/model";

export default buildModule('TokTokNft', m => {
    const mockToken = m.contract('MockERC20', ['MockToken', 'MT', 1000000]);

    // https://github.com/NomicFoundation/hardhat-ignition/issues/673
    const tokTokNftContract = m.contract('TokTokNft',
      [
              "TokTokNft", // @param name_ Name of the ERC1155
              "TTN",// @param symbol_ Symbol of the ERC1155
              1000,// @param cap_ Total cap of tokens to be issued
              mockToken,// @param payable_token_ Address of the token used for payments
              Date.now(),// @param lendingAt_ Start time of the lending agreement (when claims can begin)
              BigInt("100000000000000000"), // @param yield_ Minimum fixed interest rate scaled to the 1e18
              1000 * 60 * 60 * 24 * 7 ,// @param lending period
              "",// @param uri_ Base URI for the token
              m.getAccount(0)// @param owner_ Owner of the contract
      ]);

    //activate the contract
    const activate = m.call(tokTokNftContract, "activate", []);

    // send ETH and MockToken to my test account
    m.send("SendingEth", "0xC7894CC334A5D21a833CDe21B53d7Fd76B5D882D", 1_000_000_000_000_000_000n);
    m.call(mockToken, "transfer", ["0xC7894CC334A5D21a833CDe21B53d7Fd76B5D882D", 1_000_000_000_000_000_000_000n]);

    tokTokNftContract.dependencies.add(mockToken);
    return { tokTokNftContract };
});
