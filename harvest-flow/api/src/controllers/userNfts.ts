import {Get, Query, Route} from "tsoa";
import {Controller} from "@tsoa/runtime";

interface GetUserNftsResponse {
    ownedNfts: Record<string, number[]>;
}

@Route('user_nfts')
export class UserNftsController extends Controller {
    @Get()
    public async get(@Query() userAddress: string): Promise<GetUserNftsResponse> {
        return dummyNfts;
    }
}

const dummyNfts: GetUserNftsResponse = {
    ownedNfts: {
        '0x1234567890abcdef1234567890abcdef12345678': [1, 2, 3],
        '0x9876543210fedcba9876543210fedcba98765432': [4, 5, 6],
    }
}