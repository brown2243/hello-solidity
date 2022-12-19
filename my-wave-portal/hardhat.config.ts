require("dotenv").config();

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const accounts = [process.env.PRIVATE_KEY || ""];
const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: process.env.STAGING_QUICKNODE_KEY,
      accounts,
    },
  },
};

export default config;
