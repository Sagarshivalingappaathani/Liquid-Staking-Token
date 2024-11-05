import express from 'express';
import {mintTokens } from './mintTokens.js';
import { PRIVATE_KEY, PUBLIC_KEY, TOKEN_MINT_ADDRESS } from './address.js';
const app = express();

const myAddress = PUBLIC_KEY;

const heliusRespone = {
  "nativeTransfers": [{
    "amount": 10000,
    "fromUserAccount": "CAzNaknduYmc2pBGtoaaUafc2Kw258yDnf91smVhCwSu",
    "toUserAccount": "sREtZDzfJBvnerJ64UFLESHroXWxnT362jm9ao5GyX1"
  }]
}

app.post('/helius', async (req, res) => {
  console.log(PUBLIC_KEY)
  const transaction = heliusRespone.nativeTransfers.find(x => x.toUserAccount == myAddress)
  console.log(transaction)
  if (!transaction) {
    res.json({ message: "processed" });
    return;
  }

  const fromAddress = transaction.fromUserAccount;
  const toAddress = transaction.toUserAccount;
  const amount = transaction.amount;
  const type = "received_native_sol";
  await mintTokens(fromAddress, toAddress, amount)
  res.send('Transaction successful');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});