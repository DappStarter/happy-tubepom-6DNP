require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half argue bright venture struggle deny maze puppy hunt hat army gift'; 
let testAccounts = [
"0xa7e01152f2eec29c25f75e3d029e3dd8dbaf9809ed3aa970901f8a3435e6a19d",
"0x262a2296affef4c2289665f89d1afcda18cf7f0f84cde090f3f23a7024379b96",
"0x1afbb8caddf60d6192e3bd701a29b679a3ed399872327e3c8872c93ab5fe4cc3",
"0x770a37a08b75b3b4122b864dfbcb334f75217ad2bdd75c8e25d7b00db82d05f4",
"0x2f3ab893c77127d13cbf79ba7ff167911a1aeba6c0952c6d4fcb28936004e66e",
"0x9c45eac833f1cc26f7f3f1c8306a4f870a92069be866416dcfd1a042d8c6955d",
"0x8a57349bfffdecb836609e984f361114d04f6d3cad444809d50c224781b91c67",
"0xc6bf677735fa7d5d379b09a4fc35705d75a2b40e147877ca3d4eab1344d70858",
"0x5eefe99338bf02c161a8540fe2379bd5df38728a9088584c11650c62b1b70279",
"0xbe5825a35a37d9e23a8714fb2be020404ccbec782b00aa1c85d3399c5fea147d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

