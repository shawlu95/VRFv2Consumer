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

Useful tasks for checking contract size and test coverage.
```
hh size-contracts
hh coverage
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
