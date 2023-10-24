# Query Chainlink Script

This script, `queryChainlink.js`, interacts with the Chainlink decentralized oracle network. It fetches the latest price data for Ethereum (ETH) and Chainlink (LINK) in USD.

## Requirements

- [Hardhat](https://hardhat.org/)
- [Ethers.js](https://docs.ethers.io/v5/)
- A configured network connection (e.g., local, Sepolia, Mainnet) in your Hardhat configuration.

## How It Works

The script connects to the Chainlink Aggregator contracts on the specified network. These contracts provide price feed data from various data providers through the Chainlink network. The script fetches and logs the latest price data for both ETH and LINK.

## Usage

1. Ensure you've set up your Hardhat environment and installed the necessary plugins and dependencies.

2. Run the script using:
   ```bash
   npx hardhat run scripts/queryChainlink.js --network YOUR_NETWORK

Replace YOUR_NETWORK with the desired network, e.g., sepolia, mainnet.

Contributing
If you'd like to contribute to the development of this script, please fork the repository and submit a pull request.

Make sure to tailor the `README.md` to match any specific details or nuances of your project. Also, if you don't have a `LICENSE` file in your repository (as linked at the bottom of the provided README), you might want to either create one or remove that line.


License
This script is released under the MIT License.

