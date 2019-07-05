const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/Crossborder.json');

const provider = new HDWalletProvider(
  'perfect trash ill size keen snake copy cable material cliff paddle spirit',
  'https://rinkeby.infura.io/v3/be1ab40c8be74ba281d7c3ec9bb37626'

// 0x347D63b416476E4A7389610083358306a7eFDCCD9 deployed on it 
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: '0x' + compiledFactory.bytecode })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};
deploy();
