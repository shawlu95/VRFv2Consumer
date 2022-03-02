# VRF Consumer Demo
1. Create subscription at: https://vrf.chain.link/chapel
2. Deploy consumer contract. Add contract address to subscription (same domain above).
3. Verify contract:

```bash
# Make sure ether-scan is installed
npm installl

hh run scripts/deploy_vrf.js --network rinkeby
hh run scripts/deploy_vrf.js --network bscTestnet

# Wait for a few minutes after deployment before running verify
hh verify \
  --network rinkeby \
  --constructor-args \
  ./scripts/args/rinkeby.js 0x789E7FE16b4D9432609403d1D2295cb3E5b4bBf8

hh verify \
  --network bscTestnet \
  --constructor-args ./scripts/args/bscTestnet.js \
  0xed070C8F44eDa5467E8865e7D631786794C1586e
```

# Advanced Sample Hardhat Project

This project demonstrates an advanced Hardhat use case, integrating other tools commonly used alongside Hardhat in the ecosystem.

The project comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts. It also comes with a variety of other tools, preconfigured to work with the project code.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
npx hardhat help
REPORT_GAS=true npx hardhat test
npx hardhat coverage
npx hardhat run scripts/deploy.js
node scripts/deploy.js
npx eslint '**/*.js'
npx eslint '**/*.js' --fix
npx prettier '**/*.{json,sol,md}' --check
npx prettier '**/*.{json,sol,md}' --write
npx solhint 'contracts/**/*.sol'
npx solhint 'contracts/**/*.sol' --fix
```

# Etherscan verification

To try out Etherscan verification, you first need to deploy a contract to an Ethereum network that's supported by Etherscan, such as Ropsten.

In this project, copy the .env.example file to a file named .env, and then edit it to fill in the details. Enter your Etherscan API key, your Ropsten node URL (eg from Alchemy), and the private key of the account which will send the deployment transaction. With a valid .env file in place, first deploy your contract:

```shell
hardhat run --network ropsten scripts/deploy.js
```

Then, copy the deployment address and paste it in to replace `DEPLOYED_CONTRACT_ADDRESS` in this command:

```shell
# verify NFT contract
npx hardhat verify \
  --contract contracts/MementoV3.sol:MementoV3 \
  --network polygonMumbai 0xF17C3836e0Ee846FA28eAb924ae4B1ee5781f68E

# verify token contract
npx hardhat verify \
  --contract contracts/Memo.sol:Memo \
  --constructor-args ./scripts/token_args.js \
  --network polygonMumbai 0x7b9abF61186cF6d2E6BbC6130bEDb50FF690F8cA
```

```
hh size-contracts
hh coverage
```

### OpenSea
* [Rinkeby](https://testnets.opensea.io/collection/memento-script-beta-2-2)
* [Polygon Mumbai](https://testnets.opensea.io/collection/memento-script-beta-2-2-v2)