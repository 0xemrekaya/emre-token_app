# Emre Token App

This project contains a ERC20 token called Emre Token created using Hardhat and written in the Solidity language. Additionally, it includes a user interface (UI) built with React. Below are the details about the project structure and how to run it.

## Description

The EMRE Token React App is a frontend application that interacts with the Emre Token smart contract deployed on the Ethereum blockchain. It provides a user-friendly interface for users to connect their MetaMask wallet, view their token balance, transfer tokens to other addresses, mint new tokens (only available to the contract owner), burn tokens, and transfer ownership of the contract (only available to the contract owner).

## Some photos and GIFs
![Screenshot_3](https://github.com/emrekaya035/emre-token_app/assets/72754835/73e26fc7-1efc-47c1-85c2-3e58c49c68ab)
<img src="https://github.com/emrekaya035/emre-token_app/assets/72754835/78103d94-35dd-4b12-8f0c-b36d1ccb8936" alt="transfer" width="500" />
<img src="https://github.com/emrekaya035/emre-token_app/assets/72754835/60dd4a89-509c-4cbd-8b56-6b5f276346c8" alt="are-not-owner" width="500" />
<img src="https://github.com/emrekaya035/emre-token_app/assets/72754835/392b07e3-3566-443a-bf2f-b95c850728d4" alt="burn" width="500" />
<img src="https://github.com/emrekaya035/emre-token_app/assets/72754835/ce9c5a28-5ec8-4086-b12e-e9ee88fa7e11" alt="transferownership" width="500" />



## Emre Token - Smart Contract

The Emre Token is an ERC-20 compliant token implemented on the Ethereum blockchain. It provides standard functions to manage and interact with the token, such as transferring, minting, burning, and managing allowances.

## Contract Details

- Token Name: Emre Token
- Token Symbol: EMRE
- Decimals: 18
- Total Supply: 100,000 EMRE tokens

## Smart Contract Architecture

This smart contract is written in Solidity, the programming language for Ethereum smart contracts. It consists of several components:

1.  `Context` (Abstract Contract): Provides functions to retrieve the current sender's address and data in the transaction.

2.  `IERC20` (Interface): Defines the standard ERC-20 token functions, including `transfer`, `approve`, `transferFrom`, `allowance`, `balanceOf`, and events for `Transfer` and `Approval`.

3.  `IERC20Metadata` (Interface): Extends the IERC20 interface to include functions for token metadata, such as name, symbol, and decimals.

4.  `ERC20` (Contract): Implements the IERC20 and IERC20Metadata interfaces. This is the core ERC-20 token contract that manages token balances, allowances, and transfers.

5.  `ERC20Burnable` (Abstract Contract): Extends the ERC20 contract to add the ability to burn tokens, reducing the total supply.

6.  `Ownable` (Abstract Contract): Provides ownership-related functions to transfer ownership and restrict access to certain functions to the contract owner only.

7.  `Emre` (Contract): Final implementation of the Emre Token, which extends ERC20, ERC20Burnable, and Ownable. It sets up the token with initial supply, and provides a minting function that can only be called by the contract owner.

## Project Setup

Please install or have installed the following:

- [nodejs](https://nodejs.org/en/download/)
- [MetaMask](https://metamask.io) Chrome extension installed in your browser
- [Ganache](https://trufflesuite.com/ganache/) for local smart contracts deployement and testing

The project consists of two main parts:

1. Smart Contract: Developed with Hardhat and written in Solidity, the Emre Token smart contract defines our erc20 token and provides its functionalities.

2. React UI: This part offers a simple user interface where users can mint (only `owner` can mint) and burn the token, view their balances, and perform transfer transactions.

### Project Installation

1. First, clone the project:

```bash
git clone <project-repo-url>
cd <project-folder-name>
```

2. Install the required dependencies:

```bash
npm install
```

### Smart Contract Development and Testing

Hardhat is used for smart contract development and testing. You can find the smart contract in the 'contracts/' directory. You are free to edit this file for development purposes.

1. Smart contract compilation

```bash
npx hardhat compile
```

2. Smart contract testing:

```bash
npx hardhat test
```

3. Smart contract deploying localhost:

```bash
npx hardhat node
```

```bash
npx hardhat run scripts/deploy.js --network localhost
```

### React UI Development and Launch

The React UI section provides a basic example of a user interface. By running this part, you can offer users an interface to interact with the token.

1. We need `ethers` library for react between UI and contracts.

```bash
npm i -S ethers@5.7.2
```

2. Finally, we can start our React project with:

```bash
npm start run
```

_Note: Make sure you have MetaMask installed and unlocked before using the app._

## Usage

1.  Connect with MetaMask: Click the "Connect with MetaMask" button to connect your MetaMask wallet. This will prompt you to authorize the application to access your Ethereum account. After connecting, your Ethereum account address will be displayed at the top.

2.  Balance of EMRE Token: The current balance of EMRE tokens in your connected account will be displayed.

3.  Transfer Tokens: Enter the recipient's address in the "Receiver Address" input and the amount of tokens you want to transfer in the "Amount" input. Click the "Transfer" button to initiate the transfer. A MetaMask pop-up will appear to confirm the transaction. After the transaction is successful, the token balance will be updated, and the transaction hash will be displayed.

4.  Mint Tokens: If you are the contract owner, you can mint new EMRE tokens. Enter the amount of tokens you want to mint in the "Mint Amount" input and click the "Mint" button. A MetaMask pop-up will appear to confirm the minting transaction. After the transaction is successful, the token balance will be updated, and the transaction hash will be displayed.

5.  Burn Tokens: You can burn your own EMRE tokens to reduce the total supply. Enter the amount of tokens you want to burn in the "Burn Amount" input and click the "Burn" button. A MetaMask pop-up will appear to confirm the burning transaction. After the transaction is successful, the token balance will be updated, and the transaction hash will be displayed.

6.  Transfer Ownership: If you are the contract owner, you can transfer ownership of the contract to another address. Enter the recipient's address in the "Receiver New Owner Address" input and click the "Transfer Ownership" button. A MetaMask pop-up will appear to confirm the ownership transfer transaction. After the transaction is successful, the transaction hash will be displayed.

# Thank You All

- [Hardhat 👷](https://hardhat.org/)
- [React](https://react.dev)
- [Hardhat-deploy](https://hardhat.org/plugins/hardhat-deploy.html)
- [ethers.js v5](https://github.com/ethers-io/ethers.js#readme)
- [web3modal](https://github.com/Web3Modal/web3modal#web3modal)
