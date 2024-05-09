import {SQLUpdate} from "@paima/node-sdk/db";
import {persistContractActivation} from "./persist/contract";
import {ContractActivatedInput, NftMintedInput} from "./types";
import {persistMint} from "./persist/ownership";

export const contractActivated = async (
    input : ContractActivatedInput
): Promise<SQLUpdate[]> => {

    const contractAddress = process.env.TOKTOK_NFT_CONTRACT_ADDRESS!;

    console.log(`Contract ${contractAddress} activated`);

    const persistActivation = persistContractActivation('chainId', contractAddress);
    return [persistActivation];
};

export const nftMinted = async (
    input : NftMintedInput
): Promise<SQLUpdate[]> => {

    const contractAddress = process.env.TOKTOK_NFT_CONTRACT_ADDRESS!;
    const chainId = 'chainId';

    console.log(`NFT ${input.tokenId} minted for contract ${contractAddress} on chain ${chainId} for ${input.receiver} with amount ${input.amount}`);

    const persist = persistMint(chainId, contractAddress, input.tokenId, input.receiver, input.amount);
    return [persist];
}