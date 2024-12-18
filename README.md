# Liquid Staking Tokens

## Overview
This project implements a Liquid Staking Token (LST) system on the Solana blockchain. It allows users to mint custom tokens by sending native SOL tokens and redeem native SOL tokens by sending back the custom tokens. The project uses `/helius` webhooks to track token transactions and automate the minting and redemption processes.

## Features

- **Minting Tokens**: Users send native SOL tokens to a specific account, and in return, custom liquid staking tokens (LST) are minted and sent to their associated token account.
- **Redeeming Tokens**: When users send back the custom liquid staking tokens, the system burns them and sends the equivalent amount of native SOL tokens back to the user's account.
- **Native Token Transfers**: Detects SOL transfers and triggers the minting process.
- **Custom Token Transfers**: Handles redemption of custom tokens by burning them and sending native SOL tokens.
- **Automated Event Handling**: `/helius` webhooks monitor transactions, enabling seamless minting and redemption.

## Technology Stack

- **Blockchain**: Solana Devnet
- **Libraries**:
  - `@solana/web3.js`: For Solana blockchain interactions.
  - `@solana/spl-token`: For SPL token operations.
- **Backend**: Node.js with Express.js

## How It Works

1. **Mint Tokens**:
   - A user sends SOL tokens to the specified public key.
   - The system mints liquid staking tokens (LST) at a fixed rate (1 SOL = 0.96 LST).
   - The minted tokens are transferred to the user's associated token account.

2. **Redeem Tokens**:
   - A user sends back liquid staking tokens (LST) to the specified account.
   - The system burns the received tokens.
   - The equivalent amount of SOL tokens is sent back to the user's account.

3. **Transaction Monitoring**:
   - `/helius` webhooks are used to monitor incoming and outgoing transactions for the specified account.
   - Based on the transaction type, the system decides whether to mint or redeem tokens.

4. **Endpoints**:
   - `/helius`: Accepts transaction event data and processes the corresponding minting or redemption logic.

## Setup and Run

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with the following keys:
   - `PRIVATE_KEY`: The private key for the payer account.
   - `PUBLIC_KEY`: The public key for the mint account.
   - `TOKEN_MINT_ADDRESS`: The mint address of the custom token.
4. Start the server:
   ```bash
   npm start
   ```

## Rate Information

- **LST Conversion Rate**: 1 SOL = 0.96 LST
- **Token Decimals**: 9

## Notes

- This project runs on the Solana Devnet.
- Ensure that the payer account has sufficient SOL for transactions.
- Modify the `TOKEN_MINT_ADDRESS` and `LST_RATE` as needed for custom tokens or rates.
