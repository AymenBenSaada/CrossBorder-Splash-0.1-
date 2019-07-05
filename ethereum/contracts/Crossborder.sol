pragma solidity ^0.4.17;
contract Crossborder{
    address[] public depStartup;
    function createStartup(uint minimum)public {
   address newStarup =  new Startup(minimum , msg.sender);
  depStartup.push(newStarup);
    }
    function getStartups() public view returns(address[]){
        return depStartup;
    }
}
contract Startup {
 struct Request {
     string description ;
    uint value;
    bool complete;
   uint approvalCount;
  mapping(address=> bool) approvals;
 }
 Request [] public requests;
  address public manager;
  uint public minimumContribution;
mapping(address=>bool)public investors;
uint public investorsCount;
modifier restricted(){
    require (msg.sender == manager);
    _;
}


 function Startup(uint minimum , address creator) public {
  manager  = creator;
minimumContribution = minimum  ;
 }

 function contribute() public payable {
require (msg.value > minimumContribution);
require (msg.sender != manager);
investors[msg.sender] =true ;
investorsCount ++;

 }

function   createRequest( string description, uint value  )public restricted{
Request memory newRequest = Request({
    description:description,
value:value,
complete:false,
approvalCount:0
    })  ;
requests.push(newRequest);

}
 function approveRequest( uint id) public {
Request storage rq   =requests[id];
require(investors[msg.sender]);
require(!rq.approvals[msg.sender]);
rq.approvals[msg.sender] = true;
rq.approvalCount ++;
 }

function finalizeRequest( uint id) public restricted {
Request storage rq   = requests[id];
require(rq.approvalCount > (investorsCount / 2 ));
require(!rq.complete) ;
rq.complete = true;
}
function getDetails()public view returns (uint, uint, uint, uint, address){
   return(
    minimumContribution,
    this.balance,
    requests.length,
    investorsCount,
    manager
    );
}
function getRequestsCount()public view returns (uint){
   return requests.length;
}


}
