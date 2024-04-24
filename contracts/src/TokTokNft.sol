// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Arrays} from "@openzeppelin/contracts/utils/Arrays.sol";
import {ERC1155} from "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {Math} from "@openzeppelin/contracts/utils/math/Math.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract TokTokNft is ERC1155, Ownable {
    using Arrays for address[];

    struct BonusTokenSettings {
        uint256 amount;
        uint256 l;
        uint256 r;
    }

    uint256 constant year = 365 days;
    /// @notice Name of the ERC1155
    string public name;
    /// @notice Symbol of the ERC1155
    string public symbol;
    /// @notice Total cap of NFTs to be issued
    uint256 public cap;
    /// @notice Address of the token used for payments
    ERC20 public payable_token;
    /// @notice Start time of the lending agreement (when claims can begin)
    uint256 public lendingAt;
    /// @notice Minimum fixed interest rate, scaled to the 1e18
    uint256 public yield;
    /// @notice Timestamp when the lending agreement matures
    uint256 public maturity;
    /// @notice The next token ID to be minted.
    /// @dev Starts at 1 because 0 is reserved for a non-existent token ID in default value of `tokenOf` mapping.
    uint256 public currentTokenId = 1;
    /// @notice Token ID corresponding to the owner address
    mapping(address => uint256) public tokenOf;
    /// @notice owner address corresponding to the token ID
    mapping(uint256 => address) public ownerOf;
    /// @notice Total amount of tokens issued
    uint256 public totalIssued;
    /// @notice Total amount of tokens claimed
    uint256 public totalClaimed;
    /// @notice Timestamp when the last claim was made for a certain token
    mapping(uint256 tokenId => uint256) public claimedAt;
    /// @notice Bonus token's settings
    mapping(address token => BonusTokenSettings) public bonusToken;
    /// @notice List of bonus tokens
    address[] public bonusTokenList;
    /// @notice Timestamp when `tokenId` last claimed for `token`
    mapping(address token => mapping(uint256 tokenId => uint256)) public claimedTokenAt;
    /// @notice Is claiming enabled
    bool internal _isActive;
    /// @notice Decimals of the `payable_token`
    uint256 internal immutable payable_token_decimals;

    event Activated();
    event BonusTokenAdded(address indexed token, uint256 amount, uint256 l, uint256 r);
    event BonusTokenClaimed(address indexed token, uint256 indexed tokenId, uint256 amount);
    event BonusTokenRemoved(address indexed token);
    event Claimed(address indexed receiver, uint256 indexed tokenId, uint256 amount);
    event Minted(address indexed receiver, uint256 indexed tokenId, uint256 amount);
    event Redeemed(address indexed receiver, uint256 indexed tokenId, uint256 amount);
    event Transfer(address indexed from, address indexed to, uint256 tokenIdFrom, uint256 tokenIdTo, uint256 amount);
    event Withdrawn(address indexed receiver, address indexed token, uint256 amount);

    error BonusTokenAlreadySet(address token);
    error BonusTokenNotSet(address token);
    error BonusTokenStartPeriodNotReached(uint256 startPeriod, uint256 currentTimestamp);
    error CapReached(uint256 cap);
    error AmountZero();
    error InvalidInput(uint256 a, uint256 b);
    error LendingAtPassed(uint256 lendingAt, uint256 currentTimestamp);
    error NotActive();

    /// @notice Initialize the contract
    /// @param name_ Name of the ERC1155
    /// @param symbol_ Symbol of the ERC1155
    /// @param cap_ Total cap of tokens to be issued
    /// @param payable_token_ Address of the token used for payments
    /// @param lendingAt_ Start time of the lending agreement (when claims can begin)
    /// @param yield_ Minimum fixed interest rate scaled to the 1e18
    /// @param uri_ Base URI for the token
    /// @param owner_ Owner of the contract
    constructor(
        string memory name_,
        string memory symbol_,
        uint256 cap_,
        address payable_token_,
        uint256 lendingAt_,
        uint256 yield_,
        uint256 lending_period_,
        string memory uri_,
        address owner_
    ) ERC1155(uri_) Ownable(owner_) {
        name = name_;
        symbol = symbol_;
        cap = cap_;
        payable_token = ERC20(payable_token_);
        lendingAt = lendingAt_;
        yield = yield_;

        maturity = lendingAt_ + lending_period_;
        payable_token_decimals = ERC20(payable_token_).decimals();
    }

    /// @notice Participate in lending by paying `amount` of `payable_token` and minting `amount` of tokens.
    /// @param amount Amount of tokens to pay and to mint
    /// @param receiver Recipient of the minted tokens
    /// @param data Additional data used in onERC1155Received
    function mint(uint256 amount, address receiver, bytes memory data) public {
        if (block.timestamp > lendingAt) {
            revert LendingAtPassed(lendingAt, block.timestamp);
        }
        if (totalIssued == cap) {
            revert CapReached(cap);
        }
        if (amount == 0) {
            revert AmountZero();
        }

        uint256 cappedAmount = Math.min(amount, cap - totalIssued);
        payable_token.transferFrom(msg.sender, address(this), cappedAmount);

        uint256 userTokenId = tokenOf[receiver];
        if (userTokenId == 0) {
            userTokenId = currentTokenId;
            tokenOf[receiver] = userTokenId;
            ownerOf[userTokenId] = receiver;
            ++currentTokenId;
        }

        totalIssued += cappedAmount;
        _mint(receiver, userTokenId, cappedAmount, data);

        emit Minted(receiver, userTokenId, cappedAmount);
    }

    /// @notice Participate in lending by paying `amount` of `payable_token` and minting `amount` of tokens.
    /// @param amount Amount of tokens to pay and to mint
    /// @param receiver Recipient of the minted tokens
    function mint(uint256 amount, address receiver) public {
        mint(amount, receiver, "");
    }

    /// @notice Enables users to claim and redeem. Can be executed only by the owner.
    function activate() public onlyOwner {
        _isActive = true;
        emit Activated();
    }

    /// @notice Claim interest accrued on a specific `tokenId`.
    /// @param tokenId Token ID to claim interest for
    /// @dev Only callable when the contract is active
    function claim(uint256 tokenId) public {
        if (!_isActive) revert NotActive();

        // Annual yield of payment tokens scaled to the 1e18
        uint256 annualYieldScaled = totalIssued * yield;

        // Proportion of time interval, scaled to the 1e18
        uint256 proportionOfIntervalScaled =
            ((Math.min(block.timestamp, maturity) - Math.max(lendingAt, claimedAt[tokenId])) * 1e18) / year;

        // Proportion of token ownership, scaled to the 1e18
        uint256 tokenOwnershipScaled = (balanceOf(ownerOf[tokenId], tokenId) * 1e18) / totalIssued;

        // Amount of payment token to be sent, scaled to the 1e18
        uint256 claimableInterestScaled =
            (((annualYieldScaled * proportionOfIntervalScaled) / 1e18) * tokenOwnershipScaled) / 1e18;

        // Scale the claimable interest to the payable token's decimals
        uint256 claimableInterest = (claimableInterestScaled * 10 ** payable_token_decimals) / 1e18;

        claimedAt[tokenId] = block.timestamp;
        totalClaimed += claimableInterest;
        payable_token.transfer(ownerOf[tokenId], claimableInterest);

        emit Claimed(ownerOf[tokenId], tokenId, claimableInterest);
    }

    /// @notice Claim interest accrued on a specific `tokenId` and redeem the principal.
    /// @param tokenId Token ID to claim interest and redeem principal for
    /// @dev Only callable when the contract is active (checked in `claim` function call)
    function redeem(uint256 tokenId) public {
        claim(tokenId);

        uint256 amount = balanceOf(ownerOf[tokenId], tokenId);
        _burn(ownerOf[tokenId], tokenId, amount);
        payable_token.transfer(ownerOf[tokenId], amount);

        emit Redeemed(ownerOf[tokenId], tokenId, amount);
    }

    /// @notice Withdraw specified `amount` of `token` from the contract. Can be executed only by the owner.
    /// @param token Address of the token to withdraw
    /// @param amount Amount of the token to withdraw
    /// @param receiver Recipient of the withdrawn tokens
    function withdraw(address token, uint256 amount, address receiver) public onlyOwner {
        if (token == address(0)) {
            payable(receiver).transfer(amount);
        } else {
            ERC20(token).transfer(receiver, amount);
        }

        emit Withdrawn(receiver, token, amount);
    }

    /// @notice Add `amount` of bonus `token` to the contract, with yielding period from `l` to `r`. Can be executed only by the owner.
    /// @param token Address of the token to add
    /// @param amount Amount of the token to add
    /// @param l Start time of the yielding period
    /// @param r End time of the yielding period
    function addBonusToken(address token, uint256 amount, uint256 l, uint256 r) public onlyOwner {
        if (bonusToken[token].amount > 0) {
            revert BonusTokenAlreadySet(token);
        }
        if (l < block.timestamp || l > r) {
            revert InvalidInput(l, r);
        }

        ERC20(token).transferFrom(msg.sender, address(this), amount);

        bonusToken[token] = BonusTokenSettings(amount, l, r);
        bonusTokenList.push(token);

        emit BonusTokenAdded(token, amount, l, r);
    }

    /// @notice Remove bonus `token` from the contract, transferring the remaining balance to `receiver`. Can be executed only by the owner.
    /// @param token Address of the token to remove
    /// @param receiver Recipient of the remaining balance
    function removeBonusToken(address token, address receiver) public onlyOwner {
        if (bonusToken[token].amount == 0) {
            revert BonusTokenNotSet(token);
        }
        delete bonusToken[token];

        for (uint256 i = 0; i < bonusTokenList.length; i++) {
            if (bonusTokenList[i] == token) {
                bonusTokenList[i] = bonusTokenList[bonusTokenList.length - 1];
                bonusTokenList.pop();
                break;
            }
        }

        ERC20(token).transfer(receiver, ERC20(token).balanceOf(address(this)));

        emit BonusTokenRemoved(token);
    }

    /// @notice Claim bonus `token` for `tokenId`.
    /// @param token Address of the bonus token to claim
    /// @param tokenId Token ID to claim bonus for
    function claimToken(address token, uint256 tokenId) public {
        if (!_isActive) revert NotActive();
        BonusTokenSettings memory settings = bonusToken[token];
        if (block.timestamp < settings.l) {
            revert BonusTokenStartPeriodNotReached(settings.l, block.timestamp);
        }

        // Proportion of time interval, scaled to the 1e18
        uint256 proportionOfIntervalScaled = (
            (Math.min(settings.r, block.timestamp) - Math.max(settings.l, claimedTokenAt[token][tokenId])) * 1e18
        ) / (settings.r - settings.l);

        // Proportion of token ownership, scaled to the 1e18
        uint256 tokenOwnershipScaled = (balanceOf(ownerOf[tokenId], tokenId) * 1e18) / totalIssued;

        // Amount of token to be sent
        uint256 sendAmount = (((settings.amount * tokenOwnershipScaled) / 1e18) * proportionOfIntervalScaled) / 1e18;

        claimedTokenAt[token][tokenId] = block.timestamp;
        ERC20(token).transfer(ownerOf[tokenId], sendAmount);

        emit BonusTokenClaimed(token, tokenId, sendAmount);
    }

    /// @notice Calculate the balance the contract needs to have for claims until timestamp `until`.
    /// @param until Timestamp until which to calculate the balance the contract needs to have for claims
    /// @return totalClaimable Total amount of tokens claimable
    /// @return totalNotYetClaimed Total amount of tokens not yet claimed
    /// @return needPayableTokenAmount Total amount of tokens the contract needs to have for claims
    function calcRemainBalance(uint256 until)
        public
        view
        returns (uint256 totalClaimable, uint256 totalNotYetClaimed, uint256 needPayableTokenAmount)
    {
        // Annual yield of payment tokens scaled to the 1e18
        uint256 annualYieldScaled = totalIssued * yield;

        // Proportion of time interval, scaled to the 1e18
        uint256 proportionOfIntervalScaled = ((Math.min(until, maturity) - lendingAt) * 1e18) / year;

        // Amount of claimable tokens, scaled to the 1e18
        uint256 totalClaimableScaled = ((annualYieldScaled * proportionOfIntervalScaled) / 1e18);

        // Scale the amount of claimable tokens to the payable token's decimals
        totalClaimable = (totalClaimableScaled * 10 ** payable_token_decimals) / 1e18;

        totalNotYetClaimed = totalClaimable - totalClaimed;
        uint256 balance = payable_token.balanceOf(address(this));
        needPayableTokenAmount =
            balance > totalNotYetClaimed ? 0 : totalNotYetClaimed - payable_token.balanceOf(address(this));
    }

    /// @notice Returns the value of tokens owned by `account`.
    /// @param account Address of the account
    /// @return Amount of tokens owned by `account`
    function balanceOf(address account) public view returns (uint256) {
        return balanceOf(account, tokenOf[account]);
    }

    /// @notice Transfers `value` amount of tokens from `from` to `to`.
    /// @param from Address of the sender
    /// @param to Address of the recipient
    /// @param value Amount of tokens to transfer
    /// @param data Additional data used in onERC1155Received
    function safeTransferFrom(address from, address to, uint256 value, bytes memory data) public {
        _safeTransferFrom(from, to, value, data);
    }

    /// @notice Standard transfer function overriden for compatibility. Transfers `value` amount of tokens from `from` to `to`.
    /// @param from Address of the sender
    /// @param to Address of the recipient
    /// @param id Unused parameter
    /// @param value Amount of tokens to transfer
    /// @param data Additional data used in onERC1155Received
    function safeTransferFrom(address from, address to, uint256 id, uint256 value, bytes memory data) public override {
        _safeTransferFrom(from, to, value, data);
    }

    /// @notice Standard batch transfer function overriden for compatibility. Transfers `values[0]` amount of tokens from `from` to `to`.
    /// @param from Address of the sender
    /// @param to Address of the recipient
    /// @param ids Unused parameter
    /// @param values Array of amounts of tokens to transfer, only the first amount is used
    /// @param data Additional data used in onERC1155Received
    function safeBatchTransferFrom(
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory values,
        bytes memory data
    ) public override {
        _safeTransferFrom(from, to, values[0], data);
    }

    /// @dev Decrease the balance of the `tokenId` held by `from` and increase the balance of the `tokenId` held by `to`.
    /// If `to` does not have a token, assign a new `tokenId` for `to`.
    /// @param from Address of the sender
    /// @param to Address of the recipient
    /// @param value Amount of tokens to transfer
    /// @param data Additional data used in onERC1155Received
    function _safeTransferFrom(address from, address to, uint256 value, bytes memory data) internal {
        if (to == address(0)) {
            revert ERC1155InvalidReceiver(address(0));
        }
        if (from == address(0)) {
            revert ERC1155InvalidSender(address(0));
        }

        uint256 fromTokenId = tokenOf[from];
        uint256 toTokenId = tokenOf[to];

        if (_isActive) {
            claim(fromTokenId);
            if (toTokenId != 0) {
                claim(toTokenId);
            }

            for (uint256 i; i < bonusTokenList.length;) {
                claimToken(bonusTokenList.unsafeMemoryAccess(i), fromTokenId);
                claimToken(bonusTokenList.unsafeMemoryAccess(i), toTokenId);
                unchecked {
                    ++i;
                }
            }
        }

        _burn(from, fromTokenId, value);

        if (toTokenId == 0) {
            toTokenId = currentTokenId;
            tokenOf[to] = toTokenId;
            ownerOf[toTokenId] = to;
            ++currentTokenId;
        }
        _mint(to, toTokenId, value, data);

        emit Transfer(from, to, fromTokenId, toTokenId, value);
    }
}
