import { NftContract, NftContractDetails, NftHistoryEvent } from "@harvest-flow/utils";
export interface GetAllNftContractsResponse {
    success: boolean;
    contracts: NftContract[];
}
export interface GetDetailedNftContractResponse {
    success: boolean;
    contract: NftContractDetails;
}
export interface GetNftHistoryResponse {
    success: boolean;
    address: string;
    history: NftHistoryEvent[];
}
export interface GetUserNftsResponse {
    success: boolean;
    ownedNfts: Record<string, number[]>;
}
export interface GetClaimableResponse {
    success: boolean;
    yield: string;
    principal: string;
}
