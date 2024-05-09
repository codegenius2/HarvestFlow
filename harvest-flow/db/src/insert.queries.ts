/** Types generated for queries found in "src/queries/insert.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'InsertMint' parameters type */
export interface IInsertMintParams {
  amount: number;
  chainId: string;
  contract_address: string;
  owner_address: string;
  token_id: string;
}

/** 'InsertMint' return type */
export type IInsertMintResult = void;

/** 'InsertMint' query type */
export interface IInsertMintQuery {
  params: IInsertMintParams;
  result: IInsertMintResult;
}

const insertMintIR: any = {"usedParamSet":{"chainId":true,"contract_address":true,"token_id":true,"owner_address":true,"amount":true},"params":[{"name":"chainId","required":true,"transform":{"type":"scalar"},"locs":[{"a":126,"b":134}]},{"name":"contract_address","required":true,"transform":{"type":"scalar"},"locs":[{"a":148,"b":165}]},{"name":"token_id","required":true,"transform":{"type":"scalar"},"locs":[{"a":173,"b":182}]},{"name":"owner_address","required":true,"transform":{"type":"scalar"},"locs":[{"a":195,"b":209}]},{"name":"amount","required":true,"transform":{"type":"scalar"},"locs":[{"a":217,"b":224}]}],"statement":"INSERT INTO ownerships (\n    chain_id,\n    contract_address,\n    token_id,\n    owner_address,\n    amount\n) VALUES (\n    LOWER(:chainId!),\n    LOWER(:contract_address!),\n    :token_id!,\n    LOWER(:owner_address!),\n    :amount!\n)"};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO ownerships (
 *     chain_id,
 *     contract_address,
 *     token_id,
 *     owner_address,
 *     amount
 * ) VALUES (
 *     LOWER(:chainId!),
 *     LOWER(:contract_address!),
 *     :token_id!,
 *     LOWER(:owner_address!),
 *     :amount!
 * )
 * ```
 */
export const insertMint = new PreparedQuery<IInsertMintParams,IInsertMintResult>(insertMintIR);


