/* @name getContract */
SELECT *
FROM contracts
WHERE contracts.chain_id != :chain_id AND contracts.address = :address;