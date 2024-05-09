export type ParsedSubmittedInputRaw =
    | InvalidInput
    | ContractActivatedInput


export type ManualParsedSubmittedInput =
    | NftMintedInput

export type ParsedSubmittedInput =
    | InvalidInput
    | ContractActivatedInput
    | NftMintedInput


export interface InvalidInput {
    input : 'invalidString'
}
export interface ContractActivatedInput {
    input : 'activated'
}

export interface NftMintedInput {
    input : 'minted'
    receiver : string
    tokenId : string
    amount : number
}