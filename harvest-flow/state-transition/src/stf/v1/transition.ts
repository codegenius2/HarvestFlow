import {SQLUpdate} from "@paima/node-sdk/db";
import {persistContractActivation, updateMintedAmount} from "./persist/contract";
import {ContractActivatedInput, NftMintedInput} from "./types";
import {persistMint} from "./persist/ownership";

const contractAddress = process.env.TOKTOK_NFT_CONTRACT_ADDRESS!;
const chainId = process.env.CHAIN_ID!;
export const contractActivated = async (
    input : ContractActivatedInput
): Promise<SQLUpdate[]> => {

    console.log(`Contract ${contractAddress} activated on chain ${chainId}`);

    const persistActivation = persistContractActivation(chainId, contractAddress);
    return [persistActivation];
};

export const nftMinted = async (
    input : NftMintedInput
): Promise<SQLUpdate[]> => {
    console.log(`NFT ${input.tokenId} minted for contract ${contractAddress} on chain ${chainId} for ${input.receiver} with amount ${input.amount}`);

    const persistOwnerShip = persistMint(chainId, contractAddress, input.tokenId, input.receiver, input.amount);
    const persistUpdateMintedAmount = updateMintedAmount(chainId, contractAddress, input.amount);
    return [persistOwnerShip, persistUpdateMintedAmount];
}