import {Get, Query, Route} from "tsoa";
import {Controller} from "@tsoa/runtime";

interface NftHistoryResponse {
    address: string;
    history: NftHistoryEvent[];
}

type NftHistoryEventType =  'contract_created' | 'purchase' | 'activate' | 'claim' | 'remove_principal' | 'withdraw' | 'deposit';
type NftHistoryEvent = {
    timestamp: number;
    eventType: NftHistoryEventType;
    transactionHash: string;
}

@Route('nft_history')
export class NftHistoryController extends Controller {
    @Get()
    public async get(@Query() address: string): Promise<NftHistoryResponse> {
        return dummyHistory;
    }
}

const dummyHistory: NftHistoryResponse = {
    address: '0x1234567890abcdef1234567890abcdef12345678',
    history: [
        {
            timestamp: Date.parse('2024-01-01T00:00:00Z'),
            eventType: 'contract_created',
            transactionHash: '0x1234567890abcdef1234567890abcdef12345678',
        },
        {
            timestamp: Date.parse('2024-01-02T00:00:00Z'),
            eventType: 'purchase',
            transactionHash: '0x1234567890abcdef1234567890abcdef12345679',
        },
        {
            timestamp: Date.parse('2024-01-03T00:00:00Z'),
            eventType: 'activate',
            transactionHash: '0x1234567890abcdef1234567890abcdef1234567a',
        },
        {
            timestamp: Date.parse('2024-01-04T00:00:00Z'),
            eventType: 'claim',
            transactionHash: '0x1234567890abcdef1234567890abcdef1234567b',
        },
        {
            timestamp: Date.parse('2024-01-05T00:00:00Z'),
            eventType: 'remove_principal',
            transactionHash: '0x1234567890abcdef1234567890abcdef1234567c',
        },
        {
            timestamp: Date.parse('2024-01-06T00:00:00Z'),
            eventType: 'withdraw',
            transactionHash: '0x1234567890abcdef1234567890abcdef1234567d',
        },
        {
            timestamp: Date.parse('2024-01-07T00:00:00Z'),
            eventType: 'deposit',
            transactionHash: '0x1234567890abcdef1234567890abcdef1234567e',
        },
    ]
}
