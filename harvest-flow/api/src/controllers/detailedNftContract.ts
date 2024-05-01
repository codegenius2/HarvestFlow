import {Get, Query, Route} from "tsoa";
import {Controller} from "@tsoa/runtime";
import {NftContractDetails} from "@harvest-flow/utils";



@Route('nft_details')
export class DetailedNftContractController extends Controller {
    @Get()
    public async get(@Query() contractAddress : string): Promise<NftContractDetails> {
        return dummyResponse;
    }
}

const dummyResponse: NftContractDetails = {
    name: 'Dummy NFT',
    symbol: 'DNFT',
    chainId: 'eip155:42161',
    address: '0x1234567890abcdef1234567890abcdef12345678',
    supplyCap: 100,
    mintedAmount: 10,
    leaseStart: Date.parse('2024-01-01T00:00:00Z'),
    leaseEnd: Date.parse('2024-07-10T00:00:00Z'),
    minYield: 9,
    accepted_token: '0x9876543210fedcba9876543210fedcba98765432',
    price: '4000',
    poolBalance: '100',
    metadata: {},
    activated: true
}