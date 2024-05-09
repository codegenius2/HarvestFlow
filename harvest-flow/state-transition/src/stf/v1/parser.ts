import type { ParserRecord } from '@paima/sdk/concise';
import { PaimaParser } from '@paima/sdk/concise';
import {
    ContractActivatedInput, InvalidInput, ManualParsedSubmittedInput,
    ParsedSubmittedInput, ParsedSubmittedInputRaw,
} from './types';
import {PARSER_KEYS, PARSER_PREFIXES} from "./constants";
import type { ValuesType } from 'utility-types';

function pref(key: ValuesType<typeof PARSER_KEYS>): string {
    return `${key} = ${PARSER_PREFIXES[key]}|`;
}

const myGrammar = `
${pref(PARSER_KEYS.contractActivated)}
`;

const contractActivated: ParserRecord<ContractActivatedInput> = {}


const parserCommands: Partial<
    Record<ValuesType<typeof PARSER_KEYS>, ParserRecord<ParsedSubmittedInputRaw>>
> = {
    [PARSER_KEYS.contractActivated]: contractActivated,

};


function manualParse(input: string): undefined | ManualParsedSubmittedInput {
    const parts = input.split('|');

    if (parts.length !== 2) return;

    const manuallyParsedPrefixes: string[] = [
        PARSER_PREFIXES[PARSER_KEYS.nftMinted],
    ];
    if (!manuallyParsedPrefixes.includes(parts[0])) return;

    try {
        const parsed = JSON.parse(parts[1]);

        if (parts[0] === PARSER_PREFIXES[PARSER_KEYS.nftMinted]) {
            if (
                !Object.hasOwn(parsed, 'receiver') ||
                !Object.hasOwn(parsed, 'tokenId') ||
                !Object.hasOwn(parsed, 'amount') ||
                typeof parsed.receiver !== 'string' ||
                typeof parsed.tokenId !== 'string' ||
                typeof parsed.amount !== 'string'
            ) {
                return;
            }

            return {
                input: PARSER_KEYS.nftMinted,
                receiver: parsed.receiver,
                tokenId: parsed.tokenId,
                amount: Number(parsed.amount),
            };
        }
    } catch (e) {
        return;
    }
}

const myParser = new PaimaParser(myGrammar, parserCommands);

function parse(input: string): ParsedSubmittedInput {
    const manuallyParsed = manualParse(input);
    if (manuallyParsed != null) return manuallyParsed;

    try {
        const parsed = myParser.start(input);

        return { input: parsed.command, ...parsed.args } as any;
    } catch (e) {
        console.log(e, 'Parsing error');
        return { input: 'invalidString' };
    }
}

export function isInvalid(input: ParsedSubmittedInput): input is InvalidInput {
    return (input as InvalidInput).input == 'invalidString';
}

export default parse;