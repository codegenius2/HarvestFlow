import {SQLUpdate} from "@paima/node-sdk/db";
import {activateContract, addMintedAmount, IActivateContractParams, IAddMintedAmountParams} from "@harvest-flow/db";

export function persistContractActivation(
    chainId: string,
    contractAddress: string
): SQLUpdate {

  const activateContractParams : IActivateContractParams = {
    chainId: chainId,
    contractAddress: contractAddress,
  }

  return [activateContract, activateContractParams];
}

export function updateMintedAmount(
    chainId: string,
    contractAddress: string,
    amount: number
): SQLUpdate {
  const addMintedAmountParams : IAddMintedAmountParams = {
    amount : amount,
    chainId: chainId,
    contractAddress: contractAddress,
  }
  return [addMintedAmount,  addMintedAmountParams];
}