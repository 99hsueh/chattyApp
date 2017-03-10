import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';
import Showusers from './Showusers.jsx';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: 'Anonymous'},
      messages: [],
      numOfUsers: {}
    };
    this.addNewMsg = this.addNewMsg.bind(this);
    this.sendNotification = this.sendNotification.bind(this);
  }

  addNewMsg(content) {
    let message = {
      username: this.state.currentUser.name,
      content: content,
      type: "postMessage"
    };
      // Update the state of the app component.
    this.socket.send(JSON.stringify(message));
  }

  sendNotification(newUsername){
    if(this.state.currentUser.name !== newUsername){
      const sysAlert = `${this.state.currentUser.name} has changed their name to ${newUsername}`;
      let message = {
        type: "postNotification",
        content: sysAlert
      };
      const newState = {...this.state, currentUser:{name: newUsername}};
      this.setState(newState);
      this.socket.send(JSON.stringify(message));
    }
  }

  componentDidMount() {
    console.log("componentDidMount <App />");
    this.socket = new WebSocket("ws://localhost:3001");

    this.socket.onopen = (event) => {
      console.log("Connected to server");
    }

    this.socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === "displayUsers"){
      this.setState({numOfUsers:this.state.numOfUsers = data})
      } else {
      this.setState({messages:this.state.messages.concat(data)});
      }
    }
  }

  render() {
  console.log("Rendering <App/>");
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
          <Showusers content={this.state.numOfUsers.content} />
        </nav>
        <MessageList
          messages={this.state.messages}
        />
        <ChatBar
          currentUser={this.state.currentUser}
          addNewMsg={this.addNewMsg}
          sendNotification={this.sendNotification}
        />
      </div>

    );
  }
}
export default App;
