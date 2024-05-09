import {SQLUpdate} from "@paima/node-sdk/db";
import {activateContract} from "@harvest-flow/db";

export function persistContractActivation(
    chainId: string,
    contractAddress: string
): SQLUpdate {
  return [activateContract, { contractAddress }];
}