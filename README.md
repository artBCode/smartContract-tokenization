# SmartContract: Tokenization

In this project Ethereum smart contracts are used to tokenize external assets. The ERC-20 interface is going to be implemented. 

## The main languages, libraries and frameworks involved in this project

* solidity
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

## Run truffle 

This will compile the contracts, start a test ethereum network as well and deploy the contracts on this network.  

```
truffle develop
```

## Run the tests

```
truffle test
```

## Run the web GUI
Before running the GUI, plesase ensure truffle is running. 

```
cd client
npm start
```

## Access the web GUI

Before accessing the GUI you should ensure you are using the local network in metamask. It is also required to import the account 0 (using its private key) from the `truffle develop` terminal into  metamask and then select it. 

http://localhost:3000/


-----------------------------------------------------------------

##### Credit to the [Ethereum Course](https://ethereum-blockchain-developer.com/) 