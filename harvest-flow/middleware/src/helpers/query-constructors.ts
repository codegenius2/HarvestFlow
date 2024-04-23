import type { QueryOptions } from '@paima/sdk/mw-core';
import { buildBackendQuery } from '@paima/sdk/mw-core';

export function backendQueryGetAllNfts(notEnded: boolean): string {
    const endpoint = 'all_nft';
    const options : QueryOptions = {
        notEnded,
    }
    return buildBackendQuery(endpoint, options);
}

export function backendQueryGetDetailedNftContract(contractAddress: string): string {
    const endpoint = 'nft_details';
    const options : QueryOptions = {
        contractAddress,
    }

    return buildBackendQuery(endpoint, options);
}

export function backendQueryGetNftHistory(contractAddress: string): string {
    const endpoint = 'nft_history';
    const options : QueryOptions = {
        contractAddress,
    }

    return buildBackendQuery(endpoint, options);
}

export function backendQueryGetUserNfts(userAddress: string): string {
    const endpoint = 'user_nfts';
    const options : QueryOptions = {
        userAddress,
    }

    return buildBackendQuery(endpoint, options);
}

export function backendQueryGetClaimable(nftAddress: string, tokenId : string): string {
    const endpoint = 'claimable';
    const options : QueryOptions = {
        nftAddress,
        tokenId,
    }

    return buildBackendQuery(endpoint, options);
}