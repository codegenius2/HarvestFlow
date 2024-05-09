/** Types generated for queries found in "src/queries/update.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'ActivateContract' parameters type */
export interface IActivateContractParams {
  contractAddress: string;
}

/** 'ActivateContract' return type */
export type IActivateContractResult = void;

/** 'ActivateContract' query type */
export interface IActivateContractQuery {
  params: IActivateContractParams;
  result: IActivateContractResult;
}

const activateContractIR: any = {"usedParamSet":{"contractAddress":true},"params":[{"name":"contractAddress","required":true,"transform":{"type":"scalar"},"locs":[{"a":54,"b":70}]}],"statement":"UPDATE contracts\nSET activated = TRUE\nWHERE address = :contractAddress!"};

/**
 * Query generated from SQL:
 * ```
 * UPDATE contracts
 * SET activated = TRUE
 * WHERE address = :contractAddress!
 * ```
 */
export const activateContract = new PreparedQuery<IActivateContractParams,IActivateContractResult>(activateContractIR);


