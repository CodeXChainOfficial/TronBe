// tron-config.js
const TronWeb = require('tronweb');

const tronWeb = new TronWeb({
  fullNode: 'https://api.shasta.trongrid.io',
  solidityNode: 'https://api.shasta.trongrid.io',
  eventServer: 'https://api.shasta.trongrid.io',
  privateKey: '53899f29f7710c43e632af06ac9058e31b22e4903e90a0d34ee8b5de996f98fa', // Replace with your private key
});

module.exports = tronWeb;
