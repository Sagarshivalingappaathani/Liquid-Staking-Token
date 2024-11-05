import dotenv from 'dotenv';
import { Connection, Keypair, PublicKey } from '@solana/web3.js';
import { getOrCreateAssociatedTokenAccount, mintTo, TOKEN_PROGRAM_ID } from '@solana/spl-token';
import bs58 from 'bs58';

dotenv.config();

const PRIVATE_KEY = process.env.PRIVATE_KEY; 
const PUBLIC_KEY = new PublicKey(process.env.PUBLIC_KEY);
const TOKEN_MINT_ADDRESS = new PublicKey("8DXfRo518bwFjAAieg23bpAH7mV7FUU47DsgyHJaAhph");

const connection = new Connection('http://api.devnet.solana.com');

export const mintTokens = async (toAddress, fromAddress, amount) => {
    try {
        const decodedPrivateKey = bs58.decode(PRIVATE_KEY);
        const payer = Keypair.fromSecretKey(decodedPrivateKey);
        
        console.log('Payer:', payer); 

        const recipientTokenAccount = await getOrCreateAssociatedTokenAccount(
            connection,
            payer,
            TOKEN_MINT_ADDRESS,
            new PublicKey(toAddress)
        );

        const mintAmount = BigInt(amount * 10 ** 9);
        
        await mintTo({
            connection,
            payer,
            mint: TOKEN_MINT_ADDRESS,
            destination: recipientTokenAccount.address,
            authority: payer,  // Should be correct
            amount: mintAmount,
            multiSigners: [],
            programId: TOKEN_PROGRAM_ID,
        });
    } catch (error) {
        console.error('Error minting tokens:', error);
        throw error; 
    }
};
