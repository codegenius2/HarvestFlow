/*
 @name activateContract
 */
UPDATE contracts
SET activated = TRUE
WHERE contracts.address = LOWER(:contractAddress) AND contracts.chain_id = :chainId!;

/*
 @name addMintedAmount
 */

UPDATE contracts
SET minted_amount = minted_amount + :amount!
WHERE contracts.address = LOWER(:contractAddress) AND contracts.chain_id = :chainId!;