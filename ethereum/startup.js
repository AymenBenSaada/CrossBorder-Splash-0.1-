import web3 from './web3';
import Startup from './build/Startup.json';

export default address => {
return new web3.eth.Contract(
  JSON.parse(Startup.interface),address);
};
