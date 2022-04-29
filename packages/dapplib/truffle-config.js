require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture glimpse frame tribe strike rival magic hub harvest cricket obscure verb'; 
let testAccounts = [
"0x1382be8e651fd4562516c39478d6290e9bb18ef7db19acbe0bfb17adc4aae162",
"0x58bae054e588f721d456a0cde286d48dd34b3798bfe8392bb8ff6024f614d651",
"0x19d3521f552187230f21213df41148ce0c9cacaeaaf84d2ca8a54d83dd29230c",
"0x4c69f183fa26fc2b629b5c4352e750b74e7a9661fadc464d5e2693e7f7fbb828",
"0xd8eeeea69340277a2c85111b067a9e27780ab618d8432e7e1b4d818ca3e2f506",
"0xe491a56777a9891fd85091c48aecac74ce92f39805008adbc56f6c9b75a87ed0",
"0xbd5bd60769af51dff88a71749111fb5ff6b1795b58b264d7f83bd38bd92aa3ff",
"0xe57fd43d12125cdca632916afa6c8c6d8927a612e58f844f21870e66af1f5cbe",
"0xc40108b9e8234f36d6b0e8d981e5385977f19e461752289a9bcc8810f20e9371",
"0x2443cb16efac8404d69362dd35064e3d7f211de99abd6bafcf8c44e37fcaefe9"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

