# Liquid Staking Token Management

This project provides a backend service to manage liquid staking tokens, automating token minting based on specific transaction criteria.

## Overview

The service listens for transaction events and mints tokens upon detecting designated conditions. The architecture includes an API endpoint that receives transaction data, checks the criteria, and invokes a minting function to issue tokens to specified addresses. This project aims to facilitate seamless integration of liquid staking tokens within a blockchain environment.

## Features

- **Transaction Monitoring**: Listens for incoming transaction data from a specified endpoint.
- **Conditional Evaluation**: Evaluates transaction data to determine if token minting criteria are met.
- **Automated Token Minting**: Calls the `mintTokens` function to mint tokens for eligible transactions.


