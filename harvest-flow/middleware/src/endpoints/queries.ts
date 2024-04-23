import type { FailedResult } from '@paima/sdk/mw-core';
import { PaimaMiddlewareErrorCode } from '@paima/sdk/mw-core';
import {ClaimableYield, NftContract, NftContractDetails, NftHistory, UserNftOwnership} from "@harvest-flow/utils";
import {
    backendQueryGetAllNfts, backendQueryGetClaimable,
    backendQueryGetDetailedNftContract, backendQueryGetNftHistory,
    backendQueryGetUserNfts
} from "../helpers/query-constructors";
import {
    GetAllNftContractsResponse, GetClaimableResponse,
    GetDetailedNftContractResponse,
    GetNftHistoryResponse,
    GetUserNftsResponse
} from "../types";
import {buildEndpointErrorFxn} from "../errors";

async function getAllNfts(notEnded : boolean): Promise<GetAllNftContractsResponse | FailedResult> {

    const errorFxn = buildEndpointErrorFxn('getAllNfts');

    let response: Response;
    try {
        const query = backendQueryGetAllNfts(notEnded);
        response = await fetch(query);
    } catch (err) {
        return errorFxn(PaimaMiddlewareErrorCode.ERROR_QUERYING_BACKEND_ENDPOINT, err);
    }

    try {
        const contracts =  (await response.json()) as NftContract[];
        return {success: true, contracts : contracts};
    } catch (err) {
        return errorFxn(PaimaMiddlewareErrorCode.INVALID_RESPONSE_FROM_BACKEND, err);
    }
}

async function getDetailedNftContract(contractAddress: string): Promise<GetDetailedNftContractResponse | FailedResult> {
    const errorFxn = buildEndpointErrorFxn('getDetailedNftContract');
    let response: Response;

    try {
        const query = backendQueryGetDetailedNftContract(contractAddress);
        response = await fetch(query);
    } catch (err) {
        return errorFxn(PaimaMiddlewareErrorCode.ERROR_QUERYING_BACKEND_ENDPOINT, err);
    }

    try {
        const contractDetails = (await response.json()) as NftContractDetails;
        return {success: true, contract: contractDetails};
    } catch (err) {
        return errorFxn(PaimaMiddlewareErrorCode.INVALID_RESPONSE_FROM_BACKEND, err);
    }
}

async function getNftHistory(contractAddress: string): Promise<GetNftHistoryResponse | FailedResult> {
    const errorFxn = buildEndpointErrorFxn('getNftHistory');
    let response: Response;

    try {
        const query = backendQueryGetNftHistory(contractAddress);
        response = await fetch(query);
    } catch (err) {
        return errorFxn(PaimaMiddlewareErrorCode.ERROR_QUERYING_BACKEND_ENDPOINT, err);
    }

    try {
        const nftHistory = (await response.json()) as NftHistory;
        return {success: true, address: nftHistory.address, history: nftHistory.history};
    } catch (err) {
        return errorFxn(PaimaMiddlewareErrorCode.INVALID_RESPONSE_FROM_BACKEND, err);
    }

}

async function getUserNfts(userAddress: string): Promise<GetUserNftsResponse | FailedResult> {
    const errorFxn = buildEndpointErrorFxn('getUserNfts');
    let response: Response;

    try {
        const query = backendQueryGetUserNfts(userAddress);
        response = await fetch(query);
    } catch (err) {
        return errorFxn(PaimaMiddlewareErrorCode.ERROR_QUERYING_BACKEND_ENDPOINT, err);
    }

    try {
        const userNfts = (await response.json()) as UserNftOwnership;
        return {success: true, ownedNfts: userNfts.ownedNfts};
    } catch (err) {
        return errorFxn(PaimaMiddlewareErrorCode.INVALID_RESPONSE_FROM_BACKEND, err);
    }
}

async function getClaimable(nftAddress: string, tokenId: string): Promise<GetClaimableResponse | FailedResult> {
    const errorFxn = buildEndpointErrorFxn('getClaimable');
    let response: Response;

    try {
        const query = backendQueryGetClaimable(nftAddress, tokenId);
        response = await fetch(query);
    } catch (err) {
        return errorFxn(PaimaMiddlewareErrorCode.ERROR_QUERYING_BACKEND_ENDPOINT, err);
    }

    try {
        const claimableYield = (await response.json()) as ClaimableYield;
        return {success: true, yield: claimableYield.yield, principal: claimableYield.principal};
    } catch (err) {
        return errorFxn(PaimaMiddlewareErrorCode.INVALID_RESPONSE_FROM_BACKEND, err);
    }
}

export const queryEndpoints = {
    getAllNfts,
    getDetailedNftContract,
    getNftHistory,
    getUserNfts,
    getClaimable
}