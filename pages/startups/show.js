import React, {Component} from 'react';
import { Card } from 'semantic-ui-react';
import { Form, Button, Input, Message, Grid} from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Startup from '../../ethereum/startup';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import { Link } from '../../routes';

class CrossborderShow extends Component{
static async getInitialProps(props){
  const startup = Startup (props.query.address);
  const details = await startup.methods.getDetails().call();

  return{
    address: props.query.address,
    minimumContribution: details[0],
    balance: details[1],
    RequestsCount: details[2],
    investorsCount: details[3],
    manager: details[4]
  };

}


renderDetails(){
const{
balance,
minimumContribution,
RequestsCount,
investorsCount,
manager
} = this.props;
const items = [
{
header:manager,
meta:'address of Manager',
description:'The manager create this campaign and  create requests & finalize them',
style:{ overflowWrap:'break-word' }
},
{
  header:minimumContribution,
  meta:'minimumContribution (Wei)',
  description:'To invest in this startup you must contribute at least this much '
},
{
  header:RequestsCount,
  meta:'number of requests',
  description:'A request try to with draw money from the contract.Requests mustbe approve by investors'
},
{
  header:investorsCount,
  meta:'number of investors',
  description:'Number of people who invested in this startup'
},
{
  header:web3.utils.fromWei(balance, 'ether'),
  meta:'Startup Balance',
  description:'The money left for the startup'
}
];
return <Card.Group items={items}/>;
}

   render(){
     return(
     <Layout>
      <h3>show time </h3>
      <Grid>
      <Grid.Column width={10}>
      {this.renderDetails()}
      <Link route={`/startups/${this.props.address}/requests`}>
      <a><Button primary content="View Requests"
       icon="history"
       primary
       style={{marginTop: '10px'}}/> </a>
      </Link>
      </Grid.Column>
      <Grid.Column width={6}>
      <ContributeForm address={this.props.address}/>
      </Grid.Column>
      </Grid>


     </Layout>
   );
 }
}
export default CrossborderShow;
