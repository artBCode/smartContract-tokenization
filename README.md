# SmartContract: Tokenization

In this project Ethereum smart contracts are used to tokenize external assets. The ERC-20 interface is going to be implemented. 

## The main languages, libraries and frameworks involved in this project

* solidity
* metamask
* truffle
* ganache
* chai
* react.js

## How to install the required dependecies for the web interface

It might be a good idea to do this every time you change the branch. 
```
cd client
npm install
```

## Run the tests
```
truffle test
```

# The app needs a `.env` file
In the home directory of this project you will need to create a `.env` file with the following content:

```
INITIAL_TOKENS=1000000
MNEMONIC=<your 12-word Secret Recovery Phrase from Metamask>"
INFURA_RINKEBY_EP=<your Infura End point for the Rinkeby network>
```

## (Option 1) Run truffle and its development network

This will compile the contracts, start a test ethereum network as well and deploy the contracts on this network.  

```
truffle develop
```

Then, in order to (re)deploy the contracts, we issue the following command in the truffle console:
```
truffle migrate
```

## (Option 2) Run another local network (ganache-cli) and deploy the contracts

We first start the the ganache test network:

```
ganache-cli --deterministic -i 5777 --chainId 5777 --po 7545 -e 10000
```

Then start truffle (in case it is not already started) 

```
truffle develop
# Then, in order to (re)deploy the contracts, we issue the following command in the truffle console:
truffle migrate --network ganache_local
```

## (Option 3) Deploy the contracts on the Rinkeby public test-network

Rinkeby is a live network, we just have to connect to it through an Infura end point. Hence, we will start truffle (in case it is not already started) 

```
truffle develop
# Then, in order to (re)deploy the contracts, we issue the following command in the truffle console:
truffle migrate --network rinkeby_infura
```


## Run the web GUI
Before running the GUI, plesase ensure the network is running. (if testing against a local one)

You should also ensure you have selected the correct network in Metamask and that you are currently using an account with a non 0 ballance.

Then:

```
cd client
npm start
```

## Access the web GUI

http://localhost:3000/


-----------------------------------------------------------------

##### Credit to the [Ethereum Course](https://ethereum-blockchain-developer.com/) 