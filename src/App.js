import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import axios from 'axios';
import {
  Button,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar
} from "semantic-ui-react";







export default class App extends Component {

  constructor(props)
{
super(props);
this.state={
  devices:[]
};


}
state = { visible: false };

handleSidebarHide = () => this.setState({ visible: false });
handleSidebarToggle = () =>
  this.setState(prevState => ({ visible: !prevState.visible }));







componentDidMount()
{
  axios.get('http://127.0.0.1:8000/').then(response =>
  {


    this.setState({

      devices:response.data
    });
  }).catch(errors => {
    console.log(errors);
  })

}

  render() {




    const { visible } = this.state;

    return(

<div style={{height: '100vh'}}>

          <Button primary onClick={this.handleSidebarToggle}>Open Details View</Button>

        <Sidebar.Pushable >
          <Sidebar
            as={Menu}
            animation="overlay"
            direction="right"
            onHide={this.handleSidebarHide}
            vertical
            width="wide"
            visible={visible}

          >
          <Header as='h1'>{this.state.devices.hwid}</Header>
          <Header as='h2'>Device data</Header>
          <Header as='h4'>Device id</Header>
            <div  class="ui disabled input">
    <input style={{width:800}} type="text" placeholder={this.state.devices.id} disabled="" tabindex="-1" />
  </div>
          <Header as='h4'>Battery charge</Header>
            <div class="ui disabled input">
    <input style={{width:800}} type="text"  placeholder={this.state.devices.battery*100+" %"} disabled="" tabindex="-1" />
  </div>
          <Header as='h4'>Last metering value</Header>
            <div class="ui disabled input">
    <input style={{width:800}} type="text" placeholder={Math.round(this.state.devices.value)+" cm"} disabled="" tabindex="-1" />
  </div>

          </Sidebar>


        </Sidebar.Pushable>
      </div>
);



  }

}
