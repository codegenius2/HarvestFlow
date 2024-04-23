import type { QueryOptions } from '@paima/sdk/mw-core';
import { buildBackendQuery } from '@paima/sdk/mw-core';

export function backendQueryGetAllNfts(notEnded: boolean): string {
    const endpoint = 'all_nft';
    const options : QueryOptions = {
        notEnded,
    }
    return buildBackendQuery(endpoint, options);
}