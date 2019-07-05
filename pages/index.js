import React,{ Component } from 'react';
import {Card, Button} from 'semantic-ui-react';
import crossborder from '../ethereum/crossborder';
import Layout from '../components/Layout';
import {Link } from  '../routes';
class CrossborderIndex extends Component {

static async getInitialProps(){
    const startups =  await crossborder.methods.getStartups().call();
    return { startups };
}

renderStartups(){
  const items = this.props.startups.map(address => {
    return{
      header : address,
      description : (
       <Link route={`/startups/${address}`}>
        <a>view startup </a>
      </Link>
      ),
      fluid : true
      };
  });
  return <Card.Group items={items}/>;
}
  render () {
    return(
    <Layout>
    <div>
    <h3>Startups </h3>
    <Link route="/startups/new">
    <a>
     <Button floated="right"
      content="Add your Startup"
      icon="add circle"
      primary
     />
     </a>
     </Link>
     {this.renderStartups()}
     </div>
     </Layout>
   );
 }

}


export default CrossborderIndex;
