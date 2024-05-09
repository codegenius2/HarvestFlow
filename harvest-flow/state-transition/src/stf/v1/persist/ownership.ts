import {SQLUpdate} from "@paima/node-sdk/db";
import {IInsertMintParams, insertMint} from "@harvest-flow/db";


export function persistMint(
  chainId: string,
  contractAddress: string,
  tokenId: string,
  owner: string,
  amount: number,
): SQLUpdate {
  const persistMintParams: IInsertMintParams = {
      amount: amount,
      chainId: chainId,
      contract_address: contractAddress,
      owner_address: owner,
      token_id: tokenId,
  };

  return [insertMint, persistMintParams];
}