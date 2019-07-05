import React,{Component} from 'react';
import { Form, Button, Input, Message} from 'semantic-ui-react';
import Layout from '../../components/Layout';
import crossborder from '../../ethereum/crossborder';
import web3 from '../../ethereum/web3';
import { Router} from '../../routes';
class CrossborderNew extends Component{
  state = {
minimumcontribution: '',
errorMessage: '',
loading: false
  };
  onSubmit = async (event) => {
   event.preventDefault();

   this.setState({loading: true , errorMessage: ''});
try{
   const accounts = await web3.eth.getAccounts();
  await  crossborder.methods
.createStartup(this.state.minimumcontribution)
.send({
  from: accounts[0]
});
Router.pushRoute('/');
}catch (err){
this.setState({errorMessage: err.message});
}
 this.setState({loading: false});
  };
  render(){
  return (
    <Layout>
    <h3>Add your Startup </h3>
    <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
    <Form.Field>
    <label>Minimum Contribution</label>
    <Input label = "Wei" labelPosition= "right" value={this.state.minimumcontribution}
    onChange={event => this.setState({minimumcontribution: event.target.value})} />
    </Form.Field>
      <Message error header="Oops Jhonny!" content={this.state.errorMessage}/>
    <Button loading={this.state.loading} primary >Create</Button>
    </Form>
   </Layout>
  );
  }
}

export default CrossborderNew;
