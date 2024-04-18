import {SQLUpdate} from "@paima/node-sdk/db";
import {Pool} from "pg";
import type Prando from '@paima/sdk/prando';
import type { SubmittedChainData } from '@paima/sdk/utils';

export default async function (
    inputData: SubmittedChainData,
    blockHeight: number,
    randomnessGenerator: Prando,
    dbConn: Pool
): Promise<SQLUpdate[]> {
    console.log(inputData, 'parsing input data');

    return [];
}