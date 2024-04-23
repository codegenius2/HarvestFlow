import type { FailedResult } from '@paima/sdk/mw-core';
import { PaimaMiddlewareErrorCode } from '@paima/sdk/mw-core';
import {NftContract} from "@harvest-flow/utils";
import {backendQueryGetAllNfts} from "../helpers/query-constructors";
import {GetAllNftContractsResponse} from "../types";
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

export const queryEndpoints = {
    getAllNfts,
}