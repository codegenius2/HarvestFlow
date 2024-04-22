import {Controller, Route, Get, Query} from 'tsoa';

interface GetAllNftContractsResponse {
    name: string; // erc721
    symbol:  string; // erc721

    chainId: string; // caip-2 format

    leaseStart: number;
    leaseEnd: number;
}

@Route('all_nft')
export class AllNftContractController extends Controller {
    @Get()
    public async get(@Query() notEnded : boolean = true): Promise<GetAllNftContractsResponse[]> {
        return dummyContracts.filter((nft) => notEnded ? nft.leaseEnd >= Date.now() : true);
    }
}

const dummyContracts: GetAllNftContractsResponse[] = [
    {
        name: 'Dummy NFT',
        symbol: 'DNFT',
        chainId: 'eip155:42161',
        leaseStart: Date.parse('2024-01-01T00:00:00Z'),
        leaseEnd: Date.parse('2024-01-10T00:00:00Z'),
    },
    {
        name: 'Dummy NFT 2',
        symbol: 'DNFT2',
        chainId: 'eip155:42161',
        leaseStart: Date.parse('2024-02-01T00:00:00Z'),
        leaseEnd: Date.parse('2024-06-10T00:00:00Z'),
    },
    {
        name: 'Dummy NFT 3',
        symbol: 'DNFT3',
        chainId: 'eip155:42161',
        leaseStart: Date.parse('2024-03-01T00:00:00Z'),
        leaseEnd: Date.parse('2024-07-10T00:00:00Z'),
    }
];