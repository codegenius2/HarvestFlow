/*
 @name activateContract
 */
UPDATE contracts
SET activated = TRUE
WHERE address = :contractAddress!;