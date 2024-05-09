export const PARSER_KEYS = {
    contractActivated: 'activated',
    nftMinted: 'minted',
} as const;

export const PARSER_PREFIXES = {
    [PARSER_KEYS.contractActivated]: 'activated',
    [PARSER_KEYS.nftMinted]: 'minted',

} as const;