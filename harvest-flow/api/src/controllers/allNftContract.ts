import { Controller, Route, Get } from 'tsoa';
interface AllNftContractResponse {
    dummy : string;
}

@Route('all_nft_contract')
export class AllNftContractController extends Controller {
    @Get()
    public async get(): Promise<AllNftContractResponse> {
        return {dummy: 'dummy'};
    }
}