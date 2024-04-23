import type { FailedResult } from '@paima/sdk/mw-core';
import { GetAllNftContractsResponse } from "../types";
declare function getAllNfts(notEnded: boolean): Promise<GetAllNftContractsResponse | FailedResult>;
export declare const queryEndpoints: {
    getAllNfts: typeof getAllNfts;
};
export {};
