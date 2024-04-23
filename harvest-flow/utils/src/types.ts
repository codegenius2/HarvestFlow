
export interface NftContract {
    name: string; // erc721
    symbol:  string; // erc721

    chainId: string; // caip-2 format

    leaseStart: number;
    leaseEnd: number;
}

export interface NftContractDetails {
    name: string; // erc721
    symbol:  string; // erc721

    chainId: string; // caip-2 format
    address: string; // address on chain

    supplyCap: number
    mintedAmount: number; // <= supplyCap

    leaseStart: number;
    leaseEnd: number;
    minYield: number; // min fixed interest rate

    accepted_token: string; // Dai only for now
    price: string;
    poolBalance: string; // funds remaining in the contract to pay holders

    metadata: any; // cached data from IPFS

    activated: boolean; // see spec
}

export interface NftHistory {
    address: string;
    history: NftHistoryEvent[];
}

type NftHistoryEventType =  'contract_created' | 'purchase' | 'activate' | 'claim' | 'remove_principal' | 'withdraw' | 'deposit';
export type NftHistoryEvent = {
    timestamp: number;
    eventType: NftHistoryEventType;
    transactionHash: string;
}

export interface UserNftOwnership {
    ownedNfts: Record<string, number[]>;
}

export interface ClaimableYield {
    yield: string;
    principal: string;
}



