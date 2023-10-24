const { ethers } = require('hardhat');

async function main() {
  const [owner] = await ethers.getSigners();

  console.log('Using account:', owner.address);

  // Get a reference to the deployed getEthUsd contract on Sepolia
  const getEthUsd = await ethers.getContractAt(
    'AggregatorV3Interface',
    '0x694AA1769357215DE4FAC081bf1f309aDC325306'
  );

  const getLinkUsd = await ethers.getContractAt(
    'AggregatorV3Interface',
    '0xc59E3633BAAC79493d908e63626716e204A45EdF'
  );

  // Query the latest price
  const price = await getEthUsd.latestRoundData();
  console.log('ETH/USD Price:', price.answer.toString() / 1e8);

  const price2 = await getLinkUsd.latestRoundData();
  console.log('Link/Usd Price:', price2.answer.toString() / 1e8);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
