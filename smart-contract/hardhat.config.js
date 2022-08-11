require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "rinkeby",
  
  solidity: "0.8.9",
  networks: {
    hardhat: {
    },
    rinkeby: {
      url: process.env.ALCHEMY_KEY,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};

// Doge deployed to:  0xA26E31f045e00a6ee88Fb0253c59d2D7501E47AB
// Link deployed to:  0x5070217BCA3903B3116f75Aa1d120653C9566653
// Dai deployed to:  0xE95785a1071bf6dAD2FE26f8964bB94a8CFE7922
// Usdc deployed to:  0x6f1Ce9b842dD5549Df99020cd9a2Ea55D8Dd945d
