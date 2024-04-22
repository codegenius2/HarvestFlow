import {Get, Query, Route} from "tsoa";
import {Controller} from "@tsoa/runtime";

interface GetClaimableResponse {
    yield: string;
    principal: string;
}

@Route('claimable')
export class ClaimableController extends Controller {
    @Get()
    public async get(@Query() nftAddress: string, @Query() tokenId : string): Promise<GetClaimableResponse> {
        return dummyClaimable;
    }
}

const dummyClaimable: GetClaimableResponse = {
    yield: '3',
    principal: '5',
}
