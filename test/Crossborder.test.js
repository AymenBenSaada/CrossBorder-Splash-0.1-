const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledCrossborder = require('../ethereum/build/Crossborder.json');
const compiledStartup = require('../ethereum/build/Startup.json');

let accounts;
let crossborder;
let startupAddress;
let startup;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  crossborder = await new web3.eth.Contract(JSON.parse(compiledCrossborder.interface))
    .deploy({ data: compiledCrossborder.bytecode })
    .send({ from: accounts[0], gas: '1000000' });

  await crossborder.methods.createStartup('100').send({
    from: accounts[0],
    gas: '1000000'
  });

  [startupAddress] = await crossborder.methods.getStartups().call();
  startup = await new web3.eth.Contract(
    JSON.parse(compiledStartup.interface),
    startupAddress
  );
});

describe('Startup', () => {
  it('deploys a startup', () => {
    assert.ok(crossborder.options.address);
    assert.ok(startup.options.address);
  });
it('The creator is the manager' , async () =>{
  const manager = await startup.methods.manager().call();
  assert.equal (accounts[0],manager);
});
it('Allow contribution & mark them investors' , async () =>{
  await startup.methods.contribute().send({
    value: '300',
    from: accounts[1]
  });
  const isInvestor = await startup.methods.investors(accounts[1]).call();
  assert(isInvestor);
});
it('Require minimum contribution' , async () =>{
  try {
    await startup.methods.contribute().send({
      value: '5',
      from: accounts[1]
  });
  assert(false);
  } catch (err) {
  assert(err);
  }
});

it('allows manager to make a request ', async()=>{
  await startup.methods.createRequest('lalalalala', '100').send({
   from: accounts[0],
   gas: '1000000'
  });
const request = await startup.methods.requests(0).call();
assert.equal('lalalalala' , request.description);

});

it('processes requests', async () => {
    await startup.methods.contribute().send({
      from: accounts[0],
      value: web3.utils.toWei('10', 'ether')
    });

    await startup.methods
      .createRequest('Aaaaaa', web3.utils.toWei('5', 'ether'))
      .send({ from: accounts[0], gas: '1000000' });

    await startup.methods.approveRequest(0).send({
      from: accounts[0],
      gas: '1000000'
    });

    await startup.methods.finalizeRequest(0).send({
      from: accounts[0],
      gas: '1000000'
    });
  });
});
