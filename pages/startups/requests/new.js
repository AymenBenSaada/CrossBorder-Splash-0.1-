import React , {Component} from 'react';
import {Form, Button, Message, Input} from 'semantic-ui-react';
import Startup from '../../../ethereum/startup';
import web3 from '../../../ethereum/web3';
import {Link, Router } from '../../../routes';
import Layout from '../../../components/Layout';
class RequestNew extends Component {
  state = {
   value:'',
   description:'',
   loading : false,
   errorMessage: ''
  };
  static async getInitialProps(props) {
  const { address } = props.query;

  return { address };
}


  onSubmit = async event => {
    event.preventDefault();
    const startup = Startup(this.props.address);
    const {description, value} = this.state;
    this.setState ({ loading: true , errorMessage: ''});
    try {
      const accounts = await web3.eth.getAccounts();
      await startup.methods
      .createRequest(description , web3.utils.toWei(value,'ether'))
      .send ({from: accounts[0]} );
      Router.pushRoute(`/startups/${this.props.address}/requests`);
    } catch (err) {
     this.setState ({ errorMessage:err.message});
    }
     this.setState ({ loading : false });

  };
  render() {
    return (
      <Layout>
      <Link route={`/startups/${this.props.address}/requests`}>
        <a>Back</a>
      </Link>
      <h3>Create a request </h3>
     <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
      <Form.Field>
      <label>Description</label>
      <Input
      value={this.state.description}
      onChange={event => this.setState({ description: event.target.value}) }
      />
      </Form.Field>
      <Form.Field>
      <label>Value</label>
      <Input
      value={this.state.value}
      onChange={event => this.setState({ value: event.target.value}) }
      />
      </Form.Field>
        <Message error header="Oops!" content={this.state.errorMessage} />
        <Button loading={this.state.loading} Button floated="right"
       content="Create"
       icon="add circle"
       primary/>
     </Form>
     </Layout>
   )
  }
}
export default RequestNew;
