// Returns a ellipsis version of a string with the ellipsis being in the middle
// eg. `0X97819177AF742660E6D8612F5E7882E538C7D9C9` will become `0x9781917..D9C9`
import {NftContractDetails} from "@harvest-flow/utils";
import { YEAR_IN_S} from "@src/utils/constants";

export function middleEllipsis(address: string, length: number = 15) {
    const splitter = '...'
    const resultingLength = length - splitter.length
    const tailingLength = 4

    if (address.length <= length || length <= tailingLength + splitter.length) return address

    return `${address.slice(0, resultingLength - tailingLength)}${splitter}${address.slice(
        address.length - tailingLength,
        address.length,
    )}`
}

export function formatTime(time: number): string {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    return `${String(days)} d ${String(hours).padStart(2, '0')} hrs ${String(minutes).padStart(2, '0')} mins ${String(seconds).padStart(2, '0')} secs`;
}

export function calculateTotalRewards(
    nftDetails: NftContractDetails,
    amountToBuy: number
): number {
    const timeLeft = nftDetails.leaseEnd - Date.now();
    const totalRewards = (amountToBuy * Number.parseInt(nftDetails.price)) * (nftDetails.minYield/1e18) * (timeLeft / YEAR_IN_S / 1000);
    return totalRewards;
}