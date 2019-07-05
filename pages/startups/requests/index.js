import React , { Component } from 'react';
import { Button, Table } from 'semantic-ui-react';
import { Link } from '../../../routes';
import Layout from '../../../components/Layout';
import Startup from '../../../ethereum/startup';
import RequestRow from '../../../components/RequestRow';
class RequestIndex extends Component {
   static async getInitialProps(props){
     const { address } = props.query;
     const startup = Startup(address);
     const requestCount = await startup.methods.getRequestsCount().call();
     const invCount = await startup.methods.investorsCount().call();
     const requests = await Promise.all(
      Array(parseInt(requestCount)).fill().map((element,index) =>{
      return startup.methods.requests(index).call();
      })
     );

     return { address , requests , requestCount, invCount};
   }
   renderRow(){
     return this.props.requests.map((request , index)=>{
       return <RequestRow
        key={index}
        id={index}
        request={request}
        address={this.props.address}
        invCount={this.props.invCount}
        />;
     });
   }
  render(){
    const { Header, Row, HeaderCell, Body} = Table;
    return(
      <Layout>
      <h1> List </h1>
        <Link route={`/startups/${this.props.address}/requests/new`}>
        <a><Button Button floated="right" style={{ marginBottom:10 }}
       content="Create Request M.Manager"
       icon="add circle"
       primary/></a>
       </Link>
       <Table>
       <Header>
       <Row>
       <HeaderCell>Index</HeaderCell>
       <HeaderCell>Description</HeaderCell>
       <HeaderCell>Amount</HeaderCell>
       <HeaderCell>Approval Count</HeaderCell>
       <HeaderCell>Approve</HeaderCell>
       <HeaderCell>Finalize </HeaderCell>
       </Row>
       </Header>
       <Body>{this.renderRow()}</Body>
       </Table>
       <div>Found {this.props.requestCount} requests </div>
      </Layout>
    );
  }
}

export default RequestIndex;
