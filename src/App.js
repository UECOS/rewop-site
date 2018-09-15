import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  EventHubClient
} from "azure-event-hubs";

const connectionString = "Endpoint=sb://iothub-ns-rewop-door-775059-a207dbd549.servicebus.windows.net/;SharedAccessKeyName=iothubowner;SharedAccessKey=NnZl508mTNJwQs+K8Pvs8nJHW6k5sCZIWeEg/q1KOmQ=";
const eventHubName = "rewop-door";

var onMessage = (eventData) => {console.log(eventData)};
var onError = (error) => {console.log(error)};
var options = () => {};

class App extends Component {
  constructor(props) {
    super(props);
    console.log("begin")
    var client = EventHubClient.createFromConnectionString(connectionString, eventHubName);
    let info = client.getHubRuntimeInformation();
    console.log("RuntimeInfo: ", info);
    client.getHubRuntimeInformation();
    console.log(client);
    var rcvHandler = client.receive("0", onMessage, onError, options);
    console.log(rcvHandler);
    this.state = {client};
  }

  render() {
    console.log(this.state);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
