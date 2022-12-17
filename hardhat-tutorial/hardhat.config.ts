import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key

// Replace this private key with your Goerli account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts

// const ALCHEMY_API_KEY = "KEY";
// const GOERLI_PRIVATE_KEY = "YOUR GOERLI PRIVATE KEY";

const config: HardhatUserConfig = {
  solidity: "0.8.4",
  // networks: {
  //   goerli: {
  //     url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
  //     accounts: [GOERLI_PRIVATE_KEY]
  //   }
  // }
};

export default config;
