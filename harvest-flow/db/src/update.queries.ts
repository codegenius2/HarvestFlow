/** Types generated for queries found in "src/queries/update.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'ActivateContract' parameters type */
export interface IActivateContractParams {
  chainId: string;
  contractAddress?: string | null | void;
}

/** 'ActivateContract' return type */
export type IActivateContractResult = void;

/** 'ActivateContract' query type */
export interface IActivateContractQuery {
  params: IActivateContractParams;
  result: IActivateContractResult;
}

const activateContractIR: any = {"usedParamSet":{"contractAddress":true,"chainId":true},"params":[{"name":"contractAddress","required":false,"transform":{"type":"scalar"},"locs":[{"a":70,"b":85}]},{"name":"chainId","required":true,"transform":{"type":"scalar"},"locs":[{"a":113,"b":121}]}],"statement":"UPDATE contracts\nSET activated = TRUE\nWHERE contracts.address = LOWER(:contractAddress) AND contracts.chain_id = :chainId!"};

/**
 * Query generated from SQL:
 * ```
 * UPDATE contracts
 * SET activated = TRUE
 * WHERE contracts.address = LOWER(:contractAddress) AND contracts.chain_id = :chainId!
 * ```
 */
export const activateContract = new PreparedQuery<IActivateContractParams,IActivateContractResult>(activateContractIR);


/** 'AddMintedAmount' parameters type */
export interface IAddMintedAmountParams {
  amount: number;
  chainId: string;
  contractAddress?: string | null | void;
}

/** 'AddMintedAmount' return type */
export type IAddMintedAmountResult = void;

/** 'AddMintedAmount' query type */
export interface IAddMintedAmountQuery {
  params: IAddMintedAmountParams;
  result: IAddMintedAmountResult;
}

const addMintedAmountIR: any = {"usedParamSet":{"amount":true,"contractAddress":true,"chainId":true},"params":[{"name":"amount","required":true,"transform":{"type":"scalar"},"locs":[{"a":53,"b":60}]},{"name":"contractAddress","required":false,"transform":{"type":"scalar"},"locs":[{"a":94,"b":109}]},{"name":"chainId","required":true,"transform":{"type":"scalar"},"locs":[{"a":137,"b":145}]}],"statement":"UPDATE contracts\nSET minted_amount = minted_amount + :amount!\nWHERE contracts.address = LOWER(:contractAddress) AND contracts.chain_id = :chainId!"};

/**
 * Query generated from SQL:
 * ```
 * UPDATE contracts
 * SET minted_amount = minted_amount + :amount!
 * WHERE contracts.address = LOWER(:contractAddress) AND contracts.chain_id = :chainId!
 * ```
 */
export const addMintedAmount = new PreparedQuery<IAddMintedAmountParams,IAddMintedAmountResult>(addMintedAmountIR);


