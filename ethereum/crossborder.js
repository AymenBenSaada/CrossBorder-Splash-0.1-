import web3 from './web3';
import  Crossborder from './build/Crossborder.json';


const instance = new web3.eth.Contract(
  JSON.parse(Crossborder.interface),
  '0x347D63b416476E4A7389610083358306a7eFDCCD'
);

export default instance;
