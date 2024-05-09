-- Generic paima engine table, that can't be modified
CREATE TABLE block_heights ( 
  block_height INTEGER PRIMARY KEY,
  seed TEXT NOT NULL,
  done BOOLEAN NOT NULL DEFAULT false
);

-- Extend the schema to fit your needs

CREATE TABLE contracts (
   name VARCHAR(50),
   symbol VARCHAR(6),
   chain_id TEXT NOT NULL,
   address TEXT NOT NULL,
   supply_cap INTEGER NOT NULL,
   minted_amount INTEGER NOT NULL DEFAULT 0,
   lease_start timestamp,
   lease_end timestamp,
   min_yield BIGINT,
   accepted_token TEXT,
   price INTEGER,
   metadata_base_url TEXT,
   activated BOOLEAN NOT NULL DEFAULT false,

   PRIMARY KEY (chain_id, address)
);

CREATE TABLE ownerships (
   chain_id TEXT NOT NULL,
   contract_address TEXT NOT NULL,
   token_id TEXT NOT NULL,
   owner_address TEXT NOT NULL,
   amount INTEGER NOT NULL, --TODO: remove when change to ERC721
   PRIMARY KEY (chain_id, contract_address, token_id)
);


-- Fill up with the initial contract data
INSERT INTO contracts (name, symbol, chain_id, address, supply_cap, minted_amount, min_yield, accepted_token, price, metadata_base_url, activated) VALUES
('TokTokNft', 'TTN', '31337', '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9', 1000, 0, 100000000000000000, '0x5FbDB2315678afecb367f032d93F642f64180aa3', 100, '', false);
