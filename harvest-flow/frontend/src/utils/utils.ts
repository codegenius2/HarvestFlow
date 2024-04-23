// Returns a ellipsis version of a string with the ellipsis being in the middle
// eg. `0X97819177AF742660E6D8612F5E7882E538C7D9C9` will become `0x9781917..D9C9`
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