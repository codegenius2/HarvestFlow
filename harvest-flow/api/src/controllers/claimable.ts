import {Get, Query, Route} from "tsoa";
import {Controller} from "@tsoa/runtime";
import {ClaimableYield} from "@harvest-flow/utils";



@Route('claimable')
export class ClaimableController extends Controller {
    @Get()
    public async get(@Query() nftAddress: string, @Query() tokenId : string): Promise<ClaimableYield> {
        return dummyClaimable;
    }
}

const dummyClaimable: ClaimableYield = {
    yield: '3',
    principal: '5',
}
