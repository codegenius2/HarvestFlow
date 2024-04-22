import {Get, Query, Route} from "tsoa";
import {Controller} from "@tsoa/runtime";

interface GetDetailedNftContractResponse {
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

    metadata: unknown; // cached data from IPFS

    activated: boolean; // see spec
}

@Route('detailed_nft')
export class DetailedNftContractController extends Controller {
    @Get()
    public async get(@Query() address : string): Promise<GetDetailedNftContractResponse> {
        return dummyResponse;
    }
}

const dummyResponse: GetDetailedNftContractResponse = {
    name: 'Dummy NFT',
    symbol: 'DNFT',
    chainId: 'eip155:42161',
    address: '0x1234567890abcdef1234567890abcdef12345678',
    supplyCap: 100,
    mintedAmount: 10,
    leaseStart: Date.parse('2024-01-01T00:00:00Z'),
    leaseEnd: Date.parse('2024-07-10T00:00:00Z'),
    minYield: 1,
    accepted_token: '0x9876543210fedcba9876543210fedcba98765432',
    price: '0.01',
    poolBalance: '100',
    metadata: {},
    activated: true
}