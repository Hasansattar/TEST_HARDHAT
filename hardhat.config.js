/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require("@nomiclabs/hardhat-waffle");
 require('@nomiclabs/hardhat-ethers');
 require("@nomiclabs/hardhat-etherscan");
 require('dotenv').config()

 
const INFURA_URL_ID=`https://rinkeby.infura.io/v3/${process.env.INFURA_ID}`;
const PRIVATE_KEY=`0x${process.env.RINKEBY_PRIVATE_KEY}`;
 module.exports = {
  solidity: "0.8.3",
  networks:{
    rinkeby:{
      url:INFURA_URL_ID,
      accounts:[PRIVATE_KEY]
    }
  },
  paths:{
      artifacts:"../front-end/src/artifacts"
  },
  //ehtereum API key
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  }
};
