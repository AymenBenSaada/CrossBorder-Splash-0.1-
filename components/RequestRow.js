import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Startup from '../ethereum/startup';

class RequestRow extends Component{
  onApprove = async () =>{
const startup = Startup(this.props.address);
const accounts = await  web3.eth.getAccounts();
await startup.methods.approveRequest(this.props.id).send({
from: accounts[0]
});
  };
  onFinalize = async () => {
    const startup = Startup(this.props.address);
    const accounts = await  web3.eth.getAccounts();
    await startup.methods.finalizeRequest(this.props.id).send({
    from: accounts[0]
    });


  };
  render(){
    const { Row,Cell } = Table;
    const { id, request, invCount  } = this.props;
    const readyToFinalize = request.approvalCount > invCount / 2 ;
    return (
      <Row disabled={request.complete} positive={readyToFinalize && !request.complete}>
      <Cell>{id+1}</Cell>
      <Cell>{request.description}</Cell>
      <Cell>{web3.utils.fromWei(request.value, 'ether')}</Cell>
      <Cell>{request.approvalCount}/{invCount}</Cell>
      <Cell>
      {request.complete ? null :(
      <Button color="green" basic onClick={this.onApprove}> Approve
      </Button>
    )}
      </Cell>
      <Cell>
       {request.complete ? null :(
      <Button color="teal" basic onClick={this.onFinalize}>Finalize
       </Button>
     )}
       </Cell>
      </Row>
    );
  }
}

export default RequestRow;
