import dotenv from "dotenv";
import "@nomicfoundation/hardhat-chai-matchers";
import "@nomiclabs/hardhat-ethers";
import "hardhat-deploy";
import "@nomiclabs/hardhat-etherscan";
import "solidity-coverage";
import "@typechain/hardhat";
import { HardhatUserConfig } from "hardhat/types";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.5.16",
        settings: {
          evmVersion: "istanbul",
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      }
    ]
  },
  paths: {
    artifacts: "build/artifacts",
    cache: "build/cache",
    deploy: "deploy",
    sources: "contracts",
    deployments: "deployments",
  },
  defaultNetwork: "hardhat",
  networks: {
    ganache: {
      url: "HTTP://127.0.0.1:7545",
    },
    hardhat: {
      blockGasLimit: 30000000, //default 30 000 000
      gasPrice: 1000000000, //10 Gwei	
      gas: 9000000,
      chainId: 1, //set mainnet ID
    },
    localhost: {
      url: "http://localhost:8545",
      gasPrice: 20000000000, //20 Gwei,
    },
  },
  typechain: {
    outDir: "typechain",
    target: "ethers-v5",
  },
  namedAccounts: {
    deployer: 0,
    account1: 1,
    account2: 2,
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_KEY,
  },
};
export default config;