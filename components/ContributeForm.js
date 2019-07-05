import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import Startup from '../ethereum/startup';
import web3 from '../ethereum/web3';
import { Router } from '../routes';
class ContributeForm extends Component {
  state = {
    value: '',
    errorMessage:'',
    loading: false
  };

onSubmit = async event => {
  event.preventDefault();
  const startup = Startup(this.props.address);
  this.setState({ loading: true ,errorMessage: '' });
try{
const accounts = await web3.eth.getAccounts();
await startup.methods.contribute().send({
from: accounts[0],
value: web3.utils.toWei(this.state.value,'ether')
});
Router.replaceRoute(`/startups/${this.props.address}`);
}catch (err) {
this.setState({errorMessage: err.message});
}
this.setState({loading: false , value: '' });
};

  render() {
    return (
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Form.Field>
          <label>Amount to Contribute</label>
          <Input
            value={this.state.value}
            onChange={event => this.setState({value: event.target.value})}

            label="ether"
            labelPosition="right"
          />
        </Form.Field>
        <Message error header="Shit!" content={this.state.errorMessage} />
        <Button loading={this.state.loading}
        Button floated="right"
         content="Contribute"
         icon="add circle"
         primary/>

      </Form>
    );
  }
}

export default ContributeForm;
