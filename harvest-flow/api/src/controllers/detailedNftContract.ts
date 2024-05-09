import {Get, Query, Route} from "tsoa";
import {Controller} from "@tsoa/runtime";
import {NftContractDetails} from "@harvest-flow/utils";
import {getContract, requirePool} from "@harvest-flow/db/build";

const chainId = process.env.CHAIN_ID;

@Route('nft_details')
export class DetailedNftContractController extends Controller {
    @Get()
    public async get(@Query() contractAddress : string): Promise<NftContractDetails | null> {
        const pool = requirePool();


        const contractAddressLc = contractAddress.toLowerCase();

        const getContractDataResult = await getContract.run(
            {  address: contractAddressLc, chain_id: chainId, },
            pool
        );

        if(getContractDataResult.length !== 0) {
            return {
                name: getContractDataResult[0].name,
                symbol: getContractDataResult[0].symbol,
                chainId: getContractDataResult[0].chain_id,
                address: getContractDataResult[0].address,
                supplyCap: getContractDataResult[0].supply_cap,
                mintedAmount: getContractDataResult[0].minted_amount,
                leaseStart:  Date.parse(getContractDataResult[0].lease_start.toISOString()),
                leaseEnd:  Date.parse(getContractDataResult[0].lease_end.toISOString()),
                minYield: Number(getContractDataResult[0].min_yield),
                accepted_token: getContractDataResult[0].accepted_token,
                price: getContractDataResult[0].price,
                poolBalance: '0', // TODO: get pool balance
                metadata: getContractDataResult[0].metadata_base_url ? getContractDataResult[0].metadata_base_url : undefined,
                activated: getContractDataResult[0].activated,
            };
        } else {
            return null;
        }


    }
}
