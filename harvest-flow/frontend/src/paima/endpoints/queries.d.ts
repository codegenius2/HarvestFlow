import type { FailedResult } from '@paima/sdk/mw-core';
import { GetAllNftContractsResponse, GetClaimableResponse, GetDetailedNftContractResponse, GetNftHistoryResponse, GetUserNftsResponse } from "../types";
declare function getAllNfts(notEnded: boolean): Promise<GetAllNftContractsResponse | FailedResult>;
declare function getDetailedNftContract(contractAddress: string): Promise<GetDetailedNftContractResponse | FailedResult>;
declare function getNftHistory(contractAddress: string): Promise<GetNftHistoryResponse | FailedResult>;
declare function getUserNfts(userAddress: string): Promise<GetUserNftsResponse | FailedResult>;
declare function getClaimable(nftAddress: string, tokenId: string): Promise<GetClaimableResponse | FailedResult>;
export declare const queryEndpoints: {
    getAllNfts: typeof getAllNfts;
    getDetailedNftContract: typeof getDetailedNftContract;
    getNftHistory: typeof getNftHistory;
    getUserNfts: typeof getUserNfts;
    getClaimable: typeof getClaimable;
};
export {};
