const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('a6b39a2b0e29c86002e68e353b0f64d1ac547a5ddc8f96fbbfda7a19c038d9c8');
const myWalletAddress = myKey.getPublic('hex')

let archCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 30);
tx1.signTransaction(myKey);
archCoin.addTransaction(tx1);

console.log('\n Starting the miner...');
archCoin.minePendingTransactions(myWalletAddress);

console.log('\nBalance of fiel is', archCoin.getBalanceofAddress(myWalletAddress));

console.log('Is chain valid?', archCoin.isChainValid());