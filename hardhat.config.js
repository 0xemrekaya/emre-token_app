require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",

  paths: {
    artifacts: './src/artifacts',
  },

  networks: {
    //Localhost requires an instance of ganache or similar local node
    localhost2: {
      url: "http://127.0.0.1:8545",
      chainId: 1337,
      gasPrice: 1000,
      accounts: { mnemonic: process.env.PRIVATE_KEY }
    },
  },
}
