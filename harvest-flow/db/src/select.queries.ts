/** Types generated for queries found in "src/queries/select.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'GetContract' parameters type */
export interface IGetContractParams {
  address?: string | null | void;
  chain_id?: string | null | void;
}

/** 'GetContract' return type */
export interface IGetContractResult {
  accepted_token: string | null;
  activated: boolean;
  address: string;
  chain_id: string;
  lease_end: Date | null;
  lease_start: Date | null;
  metadata_base_url: string | null;
  min_yield: number | null;
  minted_amount: number;
  name: string | null;
  price: number | null;
  supply_cap: number;
  symbol: string | null;
}

/** 'GetContract' query type */
export interface IGetContractQuery {
  params: IGetContractParams;
  result: IGetContractResult;
}

const getContractIR: any = {"usedParamSet":{"chain_id":true,"address":true},"params":[{"name":"chain_id","required":false,"transform":{"type":"scalar"},"locs":[{"a":52,"b":60}]},{"name":"address","required":false,"transform":{"type":"scalar"},"locs":[{"a":86,"b":93}]}],"statement":"SELECT *\nFROM contracts\nWHERE contracts.chain_id != :chain_id AND contracts.address = :address"};

/**
 * Query generated from SQL:
 * ```
 * SELECT *
 * FROM contracts
 * WHERE contracts.chain_id != :chain_id AND contracts.address = :address
 * ```
 */
export const getContract = new PreparedQuery<IGetContractParams,IGetContractResult>(getContractIR);


